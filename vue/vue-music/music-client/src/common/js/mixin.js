import { mapActions } from 'vuex'
export const searchMixin = {
  data() {
    return {
      query:''
    }
  },
  computed: {

  },
  methods: {
    searchContent(e){
      this.query = e.trim()
      // 发请求
    },
    saveSearch(song) {
      // 拿着选中的这首歌去播放
      console.log(song);
      this.selectPlaySong(song)
      // 保存历史记录
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory',
      'clearSearchHistory',  // 第三步 引入，第四步去com.js
      'selectPlaySong'
    ]),

  },

}