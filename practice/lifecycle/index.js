import Vue from 'vue'

new Vue({
  el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 'aaa'
  },
  beforeCreate () {
    console.log(this, this.$el, 'beforeCreate')
  },
  created () {
    console.log(this, this.$el, 'create')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'update')
  },
  beforeMount () {
    // 根据节点打印的结果，可以确定dom操作最早在BeforeMount调用
    // 比如 页面数据的初始化
    console.log(this, this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this, this.$el, 'mounted')
  },
  activated () {
    console.log(this, 'actived')
  },
  deactivated () {
    console.log(this, 'destroy')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroy () {
    console.log(this, 'destroy')
  },
  render (createElement) {
    // 和template(options)的作用一样
    return createElement('div', {}, this.text)
  },
  renderError (createElement, err) {
    // 捕捉本组件的异常
    return createElement('div', {}, err.stack)
  },
  errorCaptured (err, vm, info) {
    // 全局捕捉异常，生产可用，在顶组件写上子组件也可捕捉到异常
    console.log(`${err.stack}  ${vm}  ${info}`)
  }
})
