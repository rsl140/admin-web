import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/api/user/vt/login',
    method: 'post',
    params
  })
}
