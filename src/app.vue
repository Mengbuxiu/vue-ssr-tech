<template>
<!--    独立外部节点-->
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
    </div>
</template>

<script>
    // 组件导入
    import Header from './todo/header.vue'
    import Todo from './todo/todo.vue'
    import Footer from './todo/footer.jsx'
    export default {
        // 组件注册
        components: {
            Header,
            Todo,
            Footer
        }
    }
</script>
<!--lang="stylus" 指定后置处理器 scoped 当前组件范围内使用 -->
<style lang="stylus" scoped>
    #app{
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover{
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
