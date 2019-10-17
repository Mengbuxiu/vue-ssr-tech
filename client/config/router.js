import Router from 'vue-router'
import routers from './routes'
// 直接new在全局都是同一个router，用函数的方式每次的router不同
export default () => {
  return new Router({
    mode: 'history',
    routes: routers
    // base: '/base_url/'
  })
}
