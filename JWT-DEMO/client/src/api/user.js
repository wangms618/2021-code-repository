import {
  post
} from './index'
export function login(body) {
  return post('/user/signin', body).then(res => res.data)
}
export function register(body) {
  return post('/user/signin', body).then(res => res.data)
}