import Vue from 'vue'
import Vuex from './myVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:111
  },
  mutations: {
    increase(state, arg) {
      state.num += arg
    }
  },
  actions: {
    asyncIncrease({ commit }, arg) {
      setTimeout(() => {
        commit('increase',arg)
      },100)
    }
  },
  getters: {
    newNum:(state)=> {
      return state.num * 2
    }
  },
  modules: {
  }
})
