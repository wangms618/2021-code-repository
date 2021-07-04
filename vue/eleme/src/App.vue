<template>
  <div id="app">
    <!-- v-header 自定义组件，此标签可以将header.vue中的代码运行过来 -->
    <v-header :seller="seller"></v-header>
    <router-view />
  </div>
</template>

<script>
// 把header.vue中的传过来
import header from "./components/header/header.vue";
// response 数据源
const response = require("./common/data/seller.json");
export default {
  name: "App",
  data() {
    return {
      seller: {},
    };
  },
  // 组件
  components: {
    "v-header": header,
  },
  // onload 生命周期
  created() {
    if (response.errno === 0) {
      this.seller = Object.assign({}, this.seller, response.data);
    }
  },
};
</script>

<style lang="stylus">
* 
  padding 0
  margin 0
</style>
