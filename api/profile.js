import {request} from '@/plugins/request'

// 获取个人资料
export const getPorfile = username => {
  return request({
    url: `/api/profiles/${username}`,
    method: 'GET'
  })
}

// 关注作者
export const followUser = username =>{
  return request({
    url:`/api/profiles/${username}/follow`,
    method:'POST'
  })
}

// 取消关注作者
export const unfollowUser = username =>{
  return request({
    url:`/api/profiles/${username}/follow`,
    method:'DELETE'
  })
}