<template>
<!--    header 是 vue 原生组件-->
    <header :class="$style.mainHeader">
        <h1>TODO</h1>
    </header>
</template>

<script>
    export default {
      name: 'header.vue'
    }
</script>

<style lang="stylus" module>
    .main-header {
        text-align center
        h1 {
            font-size 100px
            color rgba(175,47,47,0.8)
            font-weight 100
            margin 20px
        }
    }

</style>
