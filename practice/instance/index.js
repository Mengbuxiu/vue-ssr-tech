import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div style="color: red"> {{ text }} </div>',
  data: {
    'text': 0
  },
  watch: {
    text: function (newVal, oldVal) {
      // console.log(`${newVal}  --- ${oldVal}`)
    }
  }
  // data () {
  //   return {
  //     'text': 'zlzlzlzlzl'
  //   }
  // }
})
// 属性
// console.log(app) vue 实例
// console.log(app.$attrs)
// console.log(app.$children)
// console.log(app.$data) data里的数据
// console.log(app.$createElement)
// console.log(app.$delete) 删除属性，并在必要时触发更改，防止泄露
// console.log(app.$el) 实例的根节点
// console.log(app.$isServer) 服务端渲染时使用
// console.log(app.$listeners)

setInterval(() => {
  app.text++
}, 1000)

// 方法
// let unWatch = app.$watch('text', (newVal, oldVal) => {
//   console.log(`${newVal}  --- ${oldVal}`)
// })
// 这种写法需要自己手动释放内存
// setTimeout(() => {
//   unWatch()
// }, 2000)

// on 设定自定义事件
app.$on('test', (a, b) => {
  console.log(`test event emited ${a} ${b}`)
})
// emit  触发自定义事件
app.$emit('test', 1, 2)

// 只能被触发一次的事件
app.$once('once', (a) => {
  console.log(a)
})

setInterval(() => {
  app.$emit('once', app.text)
  // console.log(app.text)
}, 1000)

// app.$forceUpdate() 强制刷新，就是给没有再data声明的属性强制渲染指
// 与之对应的是app.$set(属性A,'a',s) 将s 和 a 绑定，值变化会互相影响
