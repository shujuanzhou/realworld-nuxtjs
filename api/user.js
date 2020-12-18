import {request} from '@/plugins/request'

// 登录
export const login = data => {
  return request({
    data,
    url: '/api/users/login',
    method: 'POST'
  })
}

// 注册
export const register = data => {
  return request({
    data,
    url: '/api/users',
    method: 'POST'
  })
}

// 获取设置
export const getUser = params=>{
  return request({
    method:'GET',
    url:'/api/user'
  })
}

// 更新设置
export const updateUser = data=>{
  return request({
    data,
    method:'PUT',
    url:'/api/user'
  })
}