import Router from 'vue-router'
import routes from './routes'
// 直接new在全局都是同一个router，用函数的方式每次的router不同
export default () => {
  return new Router({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savePosition) {
      // 保存滚动位置
      if (savePosition) {
        return savePosition
      } else {
        return {x: 0, y: 0}
      }
    }

    // 设置成false，每次切换页面会访问后台，耗时，一般是true
    // fallback: true
    // parseQuery (query) {
      // str => json
    // },
    // stringifyQuery (obj) {
      // json obj => str
    // }
    // base: '/base_url/'

  })
}
