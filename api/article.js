import {request} from '@/plugins/request'

// 获取文章
export const getArticles = params => {
  return request({
    params,
    url: '/api/articles',
    method: 'GET'
  })
}

// 获取用户关注的文章
export const getFeedArticles = params => {
  return request({
    params,
    url: '/api/articles/feed',
    method: 'GET'
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    url: `/api/articles/${slug}/favorite`,
    method: 'POST'
  })
}

// 删除点赞
export const deleteFavorite = slug => {
  return request({
    url: `/api/articles/${slug}/favorite`,
    method: 'DELETE'
  })
}

// 获取文章详情
export const getArticleDetail = slug => {
  return request({
    url: `/api/articles/${slug}`,
    method: 'GET'
  })
}

// 获取文章评论
export const getArticleComments = slug => {
  return request({
    url: `/api/articles/${slug}/comments`,
    method: 'GET'
  })
}

// 新建article
export const createArticle = data=>{
  return request({
    data,
    url: '/api/articles',
    method:'POST'
  })
}

// 添加评论
export const addComments = params=>{
  return request({
    data:{
      comment:{
        body:params.body
      }
    },
    url:`/api/articles/${params.slug}/comments`,
    method:'POST'
  })
}

// 删除评论
export const deleteComments = data=>{
  return request({
    url:`/api/articles/${data.slug}/comments/${data.id}`,
    method:'DELETE'
  })
}