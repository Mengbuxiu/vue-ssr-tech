export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: () => import('@/views/todo/todo')
  },
  {
    path: '/login',
    component: () => import('@/views/login/login')
  }
]
