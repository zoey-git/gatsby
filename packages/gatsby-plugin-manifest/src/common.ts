import fs from 'fs'
import sysPath from 'path'

// default icons for generating icons
export const defaultIcons: Array<IconConfig> = [
  {
    src: 'icons/icon-48x48.png',
    sizes: '48x48',
    type: 'image/png',
  },
  {
    src: 'icons/icon-72x72.png',
    sizes: '72x72',
    type: 'image/png',
  },
  {
    src: 'icons/icon-96x96.png',
    sizes: '96x96',
    type: 'image/png',
  },
  {
    src: 'icons/icon-144x144.png',
    sizes: '144x144',
    type: 'image/png',
  },
  {
    src: 'icons/icon-192x192.png',
    sizes: '192x192',
    type: 'image/png',
  },
  {
    src: 'icons/icon-256x256.png',
    sizes: '256x256',
    type: 'image/png',
  },
  {
    src: 'icons/icon-384x384.png',
    sizes: '384x384',
    type: 'image/png',
  },
  {
    src: 'icons/icon-512x512.png',
    sizes: '512x512',
    type: 'image/png',
  },
]

/**
 * Check if the icon exists on the filesystem
 *
 * @param srcIcon Path of the icon
 */
export function doesIconExist(srcIcon: string) {
  try {
    return fs.statSync(srcIcon).isFile()
  } catch (e) {
    if (e.code !== 'ENOENT') {
      throw e
    }

    return false
  }
}

/**
 * @param path The generic path to an icon
 * @param digest The digest of the icon provided in the plugin's options.
 */
export function addDigestToPath(
  path: string,
  digest: string,
  method: CacheBustingMethod
) {
  if (method === 'name') {
    const parsedPath = sysPath.parse(path)

    return `${parsedPath.dir}/${parsedPath.name}-${digest}${parsedPath.ext}`
  }

  if (method === 'query') {
    return `${path}?v=${digest}`
  }

  return path
}
