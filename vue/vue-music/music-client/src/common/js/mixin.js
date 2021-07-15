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
      console.log(e);
      this.query = e.trim()
      // 发请求
    }
  },
}