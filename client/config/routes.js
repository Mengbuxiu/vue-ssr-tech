import Todo from '../view/todo/todo.vue'
import Login from '../view/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo
  },
  {
    path: '/login',
    component: Login
  }
]
