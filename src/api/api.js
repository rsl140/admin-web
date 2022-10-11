import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/user/vt/login',
    method: 'post',
    data
  })
}

export function getInfo(params) {
  return request({
    url: '/api/user/getUserInfo',
    method: 'get',
    params
  })
}

export function logout(params) {
  return request({
    url: '/api/user/logout',
    method: 'get',
    params
  })
}
