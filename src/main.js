import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import api from './api'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission'
import './utils/filter'
import './components/global.less'
import './components/common'
import { Dialog } from '@/components'

Vue.config.productionTip = false

Vue.use(api)
Vue.use(Dialog)

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
