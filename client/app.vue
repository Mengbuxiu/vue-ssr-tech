<template>
  <!--    独立外部节点-->
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{ fullName }} {{count}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    // 组件导入
    import Header from './layouts/header.vue'
    // import Todo from './view/todo/todo.vue'
    import Footer from './layouts/footer.jsx'

    export default {
        // 组件注册
        components: {
            Header,
            // Todo,
            Footer
        },
        mounted () {
            console.log(this.$store)
            let i = 1
            setInterval(() => {
                this.$store.commit('updateCount', i++)
            }, 1000)
        },
        computed: {
            ...mapState(['count']),
            // count () {
            //     return this.$store.state.count
            // },
            ...mapGetters(['fullName'])
            // fullName () {
            //     return this.$store.getters.fullName
            // }
        }
    }
</script>
<!--lang="stylus" 指定后置处理器 scoped 当前组件范围内使用 -->
<style lang="stylus" scoped>
  #app {
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  }

  #cover {
    position: absolute;
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    opacity .5
    z-index -1
  }
</style>
