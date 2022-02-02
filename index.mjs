import encode from './lib/encode.mjs'
import decode from './lib/decode.mjs'
import createUrlFromHash from './lib/createUrlFromHash'
import getHashFromUrl from './lib/getHashFromUrl'

export { encode as createSwimlanesHash, decode as decodeSwimlanesHash }

export const createSwimlanesUrl = (markup) => {
  const hash = encode(markup)
  return createUrlFromHash(hash)
}

export const decodeSwimlanesUrl = (url) => {
  const hash = getHashFromUrl(url)
  return decode(hash)
}
