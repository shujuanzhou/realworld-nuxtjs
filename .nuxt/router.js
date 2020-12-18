import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4ac1a7fa = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _11cd87f8 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _281bbf70 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _695073f0 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _51fe1abc = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _625f5b74 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _501ab73d = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4ac1a7fa,
    children: [{
      path: "",
      component: _11cd87f8,
      name: "home"
    }, {
      path: "/login",
      component: _281bbf70,
      name: "login"
    }, {
      path: "/register",
      component: _281bbf70,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _695073f0,
      name: "profile"
    }, {
      path: "/settings",
      component: _51fe1abc,
      name: "settings"
    }, {
      path: "/editor",
      component: _625f5b74,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _501ab73d,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
