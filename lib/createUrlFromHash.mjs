import { URL_BASE } from './consts.mjs'

const createUrlFromHash = (hash) => {
  const url = new URL(URL_BASE)
  url.hash = hash
  return url
}

export default createUrlFromHash
