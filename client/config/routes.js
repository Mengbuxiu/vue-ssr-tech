// import Todo from '../view/todo/todo.vue'
// import Login from '../view/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    path: '/app',
    // 异步路由：只加载需要的js
    component: () => import('../view/todo/todo.vue'),
    meta: {
      title: 'this is app',
      description: 'app,app,app,app,app'
    },
    // 进入 /app 之前调用
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    }
    /* ,
    children: [
      {
        path: 'test',
        component: Login
      }
    ] */
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../view/login/login.vue')
  }
]
