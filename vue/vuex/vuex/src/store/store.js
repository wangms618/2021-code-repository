import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  count:1
}
// 改变
const mutations = {
  // 接收参数n
  add(state,n) {
    state.count += n;
  },
  reduce(state) {
    state.count--
  }
}
// 计算过滤操作
const getters = {
  count: function (state) {
    return state.count += 10;
  }
}
// actions异步
const actions = {
  addAction(context) {
    context.commit('add',10)
  },
  reduceAction([commit]) {
    commit('reduce');
  }
}
// 模块组
const modulesA = {
  state,
  mutations,
  getters,
  actions
}
export default new Vuex.Store({
  modules:{a:modulesA}
})