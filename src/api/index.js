const PATH = require('path')
const APIITEM = require.context('./', false, /\.api\.js/)
const API = {}

APIITEM.keys().forEach(item => {
  const name = PATH.basename(item, '.api.js')
  API[name] = APIITEM(item).default
})

export default {
  install(Vue, options) {
    Vue.prototype.$api = this
  },
  ...API
}
