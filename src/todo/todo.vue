<template>
    <section class="real-app">
        <input
                type="text"
                class="add-input"
                autofocus="autofocus"
                placeholder="接下来做什么?"
                @keyup.exact.enter="addTodo"
        />
        <item
                :todo="todo"
                v-for="todo in filteredTodos"
                :key="todo.id"
                @del="deleteTodo"
        />
        <Tabs
                :filter="filter"
                :todos="todos"
                @toggle="toggleFilter"
                @clearAllCompleted="clearAllCompleted"
        />
    </section>
</template>

<script>
    import item from '../todo/item.vue'
    import Tabs from '../todo/tabs.vue'

    let id = 0;
    export default {
        name: "todo.vue",
        data() {
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
          filteredTodos() {
              // `this` 指向 vm 实例
              // filter 为响应式依赖
              if (this.filter === 'all'){
                  return this.todos;
              }
              const completed = this.filter === 'completed';
              return this.todos.filter(todo => completed === todo.completed)
          }
        },
        methods: {
            clearAllCompleted() {
                // 将未完成的todo重新赋值给原todos
                this.todos = this.todos.filter(todo => !todo.completed)
            },
            toggleFilter(state) {
                this.filter =state
            },
            addTodo(e) {
                this.todos.unshift(
                    {
                        id: id++,
                        content: e.target.value.trim(),
                        completed: false
                    }
                );
                e.target.value = ''
            },
            deleteTodo(id) {
                // 如果todo.id === 传入的 id，那就删掉当前这个todo
                this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
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
