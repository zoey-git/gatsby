const { slash } = require(`gatsby-core-utils`)
const { platform } = require(`os`)

const isWindows = platform() === `win32`

/**
 * Convert Windows backslash paths to slash paths: foo\\bar ➔ foo/bar
 * and ensure that windows drive letter is always uppercase
 *
 * @param  {String} path
 * @return {String} normalized path
 */
module.exports = function normalizeFilePath(path) {
  let normalized = slash(path)

  // Ensure windows drive letter is uppercase:
  if (isWindows) {
    const segments = normalized.split(`:/`)
    normalized =
      segments.length > 1
        ? segments.shift().toUpperCase() + `:/` + segments.join(`:/`)
        : normalized
  }
  return normalized
}
