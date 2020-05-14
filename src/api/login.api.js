import request from '@/utils/request'

export default {
  test(params) {
    return request.get('/Act/index', {
      params,
      loading: true
    })
  },
  login(parameter) {
    return new Promise(resolve => resolve({
      result: {
        token: '123456789'
      }
    }))
  },
  getInfo () {
    return new Promise(resolve => resolve({
      result: {
        role: {
          permissions: ['super']
        }
      }
    }))
    // return axios({
    //   url: '/user/info',
    //   method: 'get',
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    //   }
    // })
  },
  logout () {
    return new Promise(resolve => resolve({
      result: {
        token: 'true'
      }
    }))
    // return axios({
    //   url: '/auth/logout',
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    //   }
    // })
  }
}
