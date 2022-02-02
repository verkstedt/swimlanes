import deflate from './deflate.mjs'
import btoa from './btoa.mjs'

const encode = (markup) => btoa(deflate(unescape(encodeURIComponent(markup))))

export default encode
