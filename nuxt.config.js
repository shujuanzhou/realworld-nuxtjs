module.exports = {
  router:{
    linkActiveClass:'active',
    extendRoutes(routes, resolve) {
      // 清除nuxt根据pages目录结构生成的默认路由配置
      routes.splice(0);
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname,'pages/layout/'),
          children:[
            {
              path: '',// 默认子路由
              name: 'home',
              component:resolve(__dirname,'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component:resolve(__dirname,'pages/login/')
            },
            {
              path: '/register',
              name: 'register',
              component:resolve(__dirname,'pages/login/')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component:resolve(__dirname,'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component:resolve(__dirname,'pages/settings/')
            },
            {
              path: '/editor',
              name: 'editor',
              component:resolve(__dirname,'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component:resolve(__dirname,'pages/article/')
            },
          ]
        }
      ])
    }
  },
  server:{
    host: '0.0.0.0',
    port: 3000
  },
  //注册插件
  plugins:[
    '~plugins/request.js',
    '~plugins/dayjs.js'
  ]
}