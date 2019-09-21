<template>
    <section class="real-app">
        <input
                type="text"
                class="add-input"
                autofocus="autofocus"
                placeholder="接下来做什么?"
                @keyup="addTodo"
        >
        <Item :todo="todo"></Item>
        <Tabs :filter="filter"></Tabs>
    </section>
</template>

<script>
    import Item from '../todo/item.vue'
    import Tabs from '../todo/tabs.vue'

    export default {
        name: "header.vue",
        data() {
            return {
                todo: {
                    id: 0,
                    content: 'this is todo',
                    completed: false
                },
                filter: 'all'
            }
        },
        components: {
            Item,
            Tabs
        },
        methods: {
            addTodo() {

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