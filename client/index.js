import Vue from 'vue'
import App from './app.vue'
import createRouter from './config/router'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)

const router = createRouter()

// 全局导航守卫，每次路由跳转都会触发，可以进行参数校验，比如校验是否登陆
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  // if (to.fullPath === '/app') {
  //   console.log(to.fullPath)
  //   next({path: '/login'})
  // } else {
  //   next()
  // }
  // next 执行以后才会跳转
  // next({path: '/login'}) 和路由传值一样
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  render: (h) => h(App)
  // 将vue 挂载到root div 下
}).$mount(root)
