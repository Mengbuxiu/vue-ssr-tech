<template>
    <div class="helper">
<!--      <router-link to="/login">去登陆</router-link>-->
        <span class="left">{{unFinishedTodoLength}} items left</span>
        <span class="tabs">
<!--            :class 动态绑定-->
            <span v-for="state in states"
                  :key="state"
                  :class="[filter === state ? 'actived' : '']"
                  @click="toggleFilter(state)"
            >
                {{ state }}
            </span>
        </span>
        <span class="clear" @click="clearAllCompleted">clearAllCompleted</span>
    </div>
</template>

<script>
    export default {
      name: 'tabs.vue',
      // 父传子所必须的属性
      // 在父引用子时必须引用的属性，因为required
      props: {
        filter: {
          type: String,
          required: true
        },
        todos: {
          type: Array,
          required: true
        }
      },
      // 当数据变化时自动修改
      computed: {
        unFinishedTodoLength () {
          return this.todos.filter(todo => !todo.completed).length
        }
      },
      data () {
        return {
          states: ['all', 'active', 'completed']
        }
      },
      methods: {
        toggleFilter (state) {
          console.log('tabs.vue -> 1,  state -> ' + state)
          this.$emit('toggle', state)
        },
        clearAllCompleted () {
          // $emit 是声明方法并在另一父组件里调用的关键字
          this.$emit('clearAllCompleted')
        }
      }
    }
</script>

<style lang="stylus" scoped>
    .helper
        font-weight 100
        display flex
        justify-content space-between
        padding 5px 0
        line-height 30px
        background-color #ffffff
        font-size 14px
        font-smoothing antialiased

    .left, .clear, .tabs
        padding 0 10px

    .left .clear
        width 150px

    .left
        text-align center

    .clear
        text-align right
        cursor pointer

    .tabs
        width 200px
        display flex
        justify-content space-between

        *
            display inline-block
            padding 0 10px
            cursor pointer
            border 1px solid rgba(175, 47, 47, 0)

            &.actived
                border-color rgba(175, 47, 47, 0.4)
                border-radius 5px
</style>
