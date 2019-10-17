import Todo from '../view/todo/todo.vue'
import Login from '../view/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    path: '/app',
    component: Todo,
    meta: {
      title: 'this is app',
      description: 'app,app,app,app,app'
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
    component: Login
  }
]
