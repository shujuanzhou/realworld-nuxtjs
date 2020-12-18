/**
 * 基于axios封装的请求模块
 */

import axios from 'axios'
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取上下文（query、params、req、res、app、store...）
// 插件函数必须作为default导出
export default ({ store }) => {
  // 请求拦截器
  request.interceptors.request.use(function (config) {
    // Do something before request is sent
    const { user } = store.state
    if(user && user.token){
      config.headers.Authorization = `Token ${store.state.user.token}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}