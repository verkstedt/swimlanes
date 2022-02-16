import { URL_BASE } from './consts.mjs'

const getHashFromUrl = (url) => {
  if (!url.startsWith(URL_BASE)) {
    return null
  }

  return new URL(url).hash.substring(1)
}

export default getHashFromUrl
