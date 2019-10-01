import Todo from '../view/todo/todo.vue'
import Login from '../view/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    components: Todo
  },
  {
    path: '/login',
    components: Login
  }
]
