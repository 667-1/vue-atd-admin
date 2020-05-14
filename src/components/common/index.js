import Vue from 'vue'

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('../common', false, /\.vue$/)
const valueArr = requireAll(req)
const keyArr = req.keys().map(item => item.match(/.\/(\S*).vue/)[1])
const obj = {}

for (const idx in keyArr) {
  if (!keyArr.hasOwnProperty(idx)) continue
  obj[keyArr[idx]] = valueArr[idx].default
}

Object.keys(obj).forEach(key => {
  Vue.component(key, obj[key])
})
