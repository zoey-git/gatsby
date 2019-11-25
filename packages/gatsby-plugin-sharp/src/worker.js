const path = require(`path`)
const queue = require(`async/queue`)
const { processFile } = require(`./process-file`)

/** @typedef {import('./process-file').TransformArgs} TransformArgs */

/**
 * @typedef WorkerInput
 * @property {string} contentDigest
 * @property {{outputPath: string, transforms: TransformArgs[]}} operations
 * @property {object} pluginOptions
 */

const breath = () =>
  new Promise(resolve => {
    setImmediate(() => {
      setImmediate(() => {
        resolve()
      })
    })
  })

/**
 * the queue concurrency is 1 as we only want to transform 1 file at a time.
 * @param {(job: WorkerInput, callback: Function) => undefined} task
 */
const q = queue(async ({ inputPaths, outputDir, args }, callback) => {
  try {
    await Promise.all(
      processFile(
        inputPaths[0],
        args.contentDigest,
        args.operations.map(operation => {
          return {
            outputPath: path.join(outputDir, operation.outputPath),
            args: operation.transforms,
          }
        }),
        args.pluginOptions
      )
    )

    await breath()
    callback()
  } catch (err) {
    await breath()
    callback(err)
  }
}, 1)

/**
 *
 * @param {string[]} inputPaths the file paths to transform
 * @param {string} outputDir the directory to save to
 * @param {WorkerInput} args
 */
exports.IMAGE_PROCESSING = async (inputPaths, outputDir, args) =>
  new Promise((resolve, reject) => {
    q.push({ inputPaths, outputDir, args }, function(err) {
      if (err) {
        return reject(err)
      }

      return resolve()
    })
  })
