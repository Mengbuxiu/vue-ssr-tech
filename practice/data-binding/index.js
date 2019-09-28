import Vue from 'vue'

new Vue({
  el: '#root',
  template: `<div>{{isActive ? 1:2}}</div>`,
  data: {
    isActive: true
  }
})
