import axios from 'axios'
// import store from '@/store'
import { getToken } from '@/utils/auth'
import { ElMessage } from 'element-plus'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
  // withCredentials: true, // 当跨域请求时发送cookie
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (+res.code !== 200) {
      if ([628, 604].indexOf(+res.code) === -1) {
        ElMessage({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
      }

      if (+res.code === 403) {
        // store.dispatch('permission/remoteRoutes')
        // store.dispatch('user/FedLogOut')
        // location.href = '/login'
        return false
      }
      if (+res.code === 628 || +res.code === 604) {
        return Promise.reject(res)
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    if (!error.response) {
      ElMessage({
        type: 'error',
        title: '网络异常',
        message: '您的网络发生异常，无法连接服务器'
      })
    } else {
      ElMessage({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
