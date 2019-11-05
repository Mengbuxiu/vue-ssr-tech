import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
// 和 vue-router那一个道理
export default () => {
  return new Vuex.Store({
    state: defaultState,
    // es6特性
    mutations,
    getters
  })
}
