import { inflateRaw } from 'pako'

const inflate = (data) => {
  const codes = []
  for (let idx = 0; idx < data.length; idx += 1) {
    codes.push(data.charCodeAt(idx))
  }
  return inflateRaw(new Uint8Array(codes), { to: 'string' })
}

export default inflate
