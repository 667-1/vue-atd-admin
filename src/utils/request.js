import axios from 'axios'
import store from '@/store'
import notification from 'ant-design-vue/es/notification'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import Vue from 'vue'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BASE_API : process.env.VUE_APP_BASE_API,
  // withCredentials: true,
  timeout: 0
})

const PENDINGARR = []
const removeCancel = config => {
  for (const key in PENDINGARR) {
    if (!PENDINGARR.hasOwnProperty(key)) continue
    if (PENDINGARR[key].url === config.url) {
      PENDINGARR[key].cancel()
      PENDINGARR.splice(key * 1, 1)
    }
  }
}

// let _fullLoading
service.interceptors.request.use(
  config => {
    console.log(config)
    removeCancel(config)
    config.cancelToken = new axios.CancelToken(e => {
      PENDINGARR.push({
        url: config.url,
        cancel: e
      })
    })
    // _fullLoading && _fullLoading.close()
    // if (config.loading) {
    //   _fullLoading = window.vm.$loading({
    //     lock: true,
    //     target: '.app-main'
    //   })
    // }
    if (Vue.ls.get(ACCESS_TOKEN)) {
      config.headers['X-Token'] = Vue.ls.get(ACCESS_TOKEN)
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errcode === 1000) {
      notification.error({
        message: 'Forbidden',
        description: res.message
      })
    } else if (res.errcode === 99999) {
      store.dispatch('Logout').then(() => {
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      })
    } else {}
    return res
    // if (res.errcode !== 200) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
    //       confirmButtonText: 'Re-Login',
    //       cancelButtonText: 'Cancel',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  error => {
    if (error.message) {

    }
    // _fullLoading && _fullLoading.close()
    return Promise.reject(error)
  }
)

export default service
