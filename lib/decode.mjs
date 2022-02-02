import inflate from './inflate.mjs'
import atob from './atob.mjs'

const decode = (hash) => decodeURIComponent(escape(inflate(atob(hash))))

export default decode
