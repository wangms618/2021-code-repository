// 封装axios
import axios from 'axios'
import history from '../history'
const BASE_URL = 'http://localhost:3001'
// 请求拦截，拿到Token
axios.interceptors.request.use((config) => {
  let jwtToken = window.localStorage.getItem('jwtToken')
  // 如果这个Token真的有
  if (jwtToken) {
    config.headers.authorization = jwtToken
  }
  return config
})

// 响应拦截
axios.interceptors.response.use(res => {
  if (res.data.code !== 0) { // code等于0代表请求成功
    return Promise.reject(res.data.error) // 用Promise.reject是为了后面可以接catch拿到错误
  }
  return res
}, (error) => {
  if (error.response.status >= 400 && error.response.status < 500) {
    history.push('/users/signin')
  }
  return Promise.reject(error.response.data.error)
})

export function post(url, body) {
  return axios.post(BASE_URL + url, body)
}