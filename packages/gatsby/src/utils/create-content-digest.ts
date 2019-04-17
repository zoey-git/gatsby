import crypto from 'crypto'

/**
 * createContentDigest() Encrypts an input using md5 hash of hexadecimal digest.
 *
 * @param input - The input to encrypt
 *
 * @return {String} - The content digest
 */
const createContentDigest = (input: any): string => {
  const content = typeof input !== 'string' ? JSON.stringify(input) : input

  return crypto
    .createHash('md5')
    .update(content)
    .digest('hex')
}

module.exports = createContentDigest
