import * as types from '../types'
const state = {
  playSong: null
}

const mutations = {
  [types.SET_PLAY_SONG](state, song) {
    state.playSong = song
  }
}


const actions = {
  selectPlaySong({commit},song) {
    commit(types.SET_PLAY_SONG,song)
  }
}

const getters = {
  getPlaySong:state =>state.playSong
}

export default {
  state,
  mutations,
  actions,
  getters
}