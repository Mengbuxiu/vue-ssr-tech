import Router from 'vue-router'
import routes from './routes'
// 直接new在全局都是同一个router，用函数的方式每次的router不同
export default () => {
  return new Router({
    routes,
    mode: 'history',
    base: '/base_url/'
  })
}
