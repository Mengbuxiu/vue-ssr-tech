<template>
    <section class="real-app">
        <input
                type="text"
                class="add-input"
                autofocus="autofocus"
                placeholder="接下来做什么?"
                @keyup.exact.enter="addTodo"
        />
<!--    v-bind: 把值绑定到 Vue 实例的一个动态属性上        -->
<!--    对于下面的v-bind:todo="todo"意思是 把值绑定到循环项的todo上        -->
<!--    v-bind:key="todo.id" Vue 为了节省资源重复利用已有 DOM 节点，要求开发者给列表中的元素加上唯一的 key，
            这样在排序之类的操作时，就不需要销毁创建新节点了。
            参考：https://cn.vuejs.org/v2/guide/list.html#key-->
        <item
                v-for="todo in filteredTodos"
                v-bind:todo="todo"
                v-bind:key="todo.id"
                @del="deleteTodo"
        />
        <!-- toggle是$emit的key，通过toggle可以把方法参数（state，不是必须，看业务）
                和方法名（toggleFilter）关联-->
        <!-- @toggle="toggleFilter"-->
        <Tabs
                v-bind:filter="filter"
                v-bind:todos="todos"
                @toggle="toggleFilter"
                @clearAllCompleted="clearAllCompleted"
        />
<!--        <router-view/>-->
    </section>
</template>

<script>
    import item from './item.vue'
    import Tabs from './tabs.vue'

    let id = 0
export default {
      name: 'todo.vue',
      data () {
        return {
          todos: [],
          filter: 'all'
        }
      },
      components: {
        item,
        Tabs
      },
      // 计算属性是基于它们的响应式依赖进行缓存的。
      // 只在相关响应式依赖发生改变时它们才会重新求值。
      computed: {
        filteredTodos () {
          console.log('todo.vue -> 3')
          // `this` 指向 vm 实例
          // filter 为响应式依赖
          // 根据子组件tabs传过来的state的值（赋值给filter）判断todos实际应显示的值
          if (this.filter === 'all') {
            return this.todos
          }
          const completed = this.filter === 'completed'
          return this.todos.filter(todo => completed === todo.completed)
        }
      },
      methods: {
        // 不需要依赖式相应，只有在点击时才需要进行的操作
        clearAllCompleted () {
          // 将未完成的todo重新赋值给原todos
          this.todos = this.todos.filter(todo => !todo.completed)
        },
        toggleFilter (state) {
          console.log('todo.vue -> 2')
          this.filter = state
        },
        addTodo (e) {
          this.todos.unshift(
            {
              id: id++,
              content: e.target.value.trim(),
              completed: false
            }
          )
          e.target.value = ''
        },
        deleteTodo (id) {
          // 如果todo.id === 传入的 id，那就删掉当前这个todo
          this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .real-app {
        width 600px
        margin 0 auto
        box-shadow 0 0 5px #666
    }


    .add-input {
        position relative
        margin 0
        width 100%
        font-size 24px
        font-family inherit
        font-weight inherit
        line-weight 1.4em
        outline none
        color inherit
        /*padding 6px*/
        border 1px solid #999
        box-shadow 0 0 5px #666
        box-sizing border-box
        font-smoothing antialiased
        padding 16px 16px 16px 60px
    }

</style>
