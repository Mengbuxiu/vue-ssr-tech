import Vue from 'vue'
import App from './app.vue'
// import routes from './config/routes'
// 此处可引用是因为在webpack.config.js中设置了css/style-loader
// import './assets/images/pic1.jpg'
// import './assets/styles/test.css'
// import  './assets/styles/test-stylus.styl'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
  // 将vue 挂载到root div 下
}).$mount(root)
