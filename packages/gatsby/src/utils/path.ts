const path = require(`path`)
const os = require(`os`)

export function joinPath(...paths: string[]) {
  const joinedPath = path.join(...paths)
  if (os.platform() === `win32`) {
    return joinedPath.replace(/\\/g, `\\\\`)
  } else {
    return joinedPath
  }
}

export function withBasePath(basePath: string) {
  return (...paths: string[]) => joinPath(basePath, ...paths)
}
