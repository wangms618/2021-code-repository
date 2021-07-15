import * as types from '../types'
const state = {
  showSidebar: false,
  searchHistory:['周杰伦','陈奕迅','杜小帅']
}
const mutations = {
  [types.COM_SHOW_SIDE_BAR](state,status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY](state, status) {
    if(!state.searchHistory.includes(status))
    state.searchHistory.unshift(status)
  },
  [types.COM_DELETE_SEARCH_HISTORY](state,index){
    state.searchHistory.splice(index,1)
  },
  [types.COM_CLEAR_SEARCH_HISTORY](state) {
    state.searchHistory = []
  }

}
const actions = {
  // setShowSidebar(context) {
  //   context.commit(types.COM_SHOW_SIDE_BAR)
  // },
  setShowSidebar({commit},status) {
    commit(types.COM_SHOW_SIDE_BAR,status)
  },
  saveSearchHistory({commit},status) {
    commit(types.COM_SAVE_SEARCH_HISTORY,status)
  },
  deleteSearchHistory({ commit }, index) {
    commit(types.COM_DELETE_SEARCH_HISTORY,index)
  },
  clearSearchHistory({ commit }) {
    commit(types.COM_CLEAR_SEARCH_HISTORY)
  }
}
const getters = {
  showSidebar: state => state.showSidebar,
  searchHistory: state=> state.searchHistory
}

export default {
  state,
  mutations,
  getters,
  actions
}