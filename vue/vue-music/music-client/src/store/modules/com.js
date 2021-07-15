import * as types from '../types'
const state = {
  showSidebar: false,
}
const mutations = {
  [types.COM_SHOW_SIDE_BAR](state,status) {
    state.showSidebar = status
  }
}
const actions = {
  // setShowSidebar(context) {
  //   context.commit(types.COM_SHOW_SIDE_BAR)
  // },
  setShowSidebar({commit},status) {
    commit(types.COM_SHOW_SIDE_BAR,status)
  }
}
const getters = {
  showSidebar:state => state.showSidebar
}

export default {
  state,
  mutations,
  getters,
  actions
}