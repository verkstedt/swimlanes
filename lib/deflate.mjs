import { deflateRaw } from 'pako'

const deflate = (text) =>
  Array.from(deflateRaw(text))
    .map((code) => String.fromCharCode(code))
    .join('')

export default deflate
