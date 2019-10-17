import Vue from 'vue'
import App from './app.vue'
import createRouter from './config/router'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
  // 将vue 挂载到root div 下
}).$mount(root)
