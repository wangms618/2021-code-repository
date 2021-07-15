<template>
  <div class="search-box">
    <i class="icon icon-search">&#xe638;</i>
    <input type="text" class="box" v-model="query" :placeholder="placeholder" />
    <i class="icon icon-dismiss" v-show="query" @click="clear">&#xe656;</i>
  </div>
</template>


<script>
import { debounce } from "@/common/js/utils.js";
export default {
  data() {
    return {
      query: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "搜索歌曲、歌手",
    },
  },
  created() {
    this.$watch(
      "query",
      debounce(() => {
        this.$emit("query", this.query);
      }, 200)
    );
  },
  methods: {
    clear() {
      this.query = "";
    },
    setQuery(query){
      this.query = query
    }
  },
};
</script>

<style scoped lang="less">
@import "../assets/css/function.less";
.search-box {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  .px2rem(padding-left, 30);
  .px2rem(padding-right, 30);
  .px2rem(height, 74);
  background: rgba(139, 120, 175, 0.05);
  border-radius: 6px;
  margin: 10px 0;
  .icon-search {
    font-size: 24px;
    color: #6b6a6a;
    position: absolute;
    left: 24px;
  }
  .box {
    flex: 1;
    margin: 0 5px;
    .px2rem(line-height, 76);
    padding: 0 30px;
    background: rgba(139, 120, 175, 0.9);
    color: hsla(0, 4%, 9%, 0.6);
    font-size: 14px;
    outline: 0;
    border: none;
    border-radius: 6px;
    &::placeholder {
      color: hsla(0, 4%, 9%, 0.6);
    }
  }
  .icon-dismiss {
    font-size: 20px;
    .px2rem(margin-right, 10);
    color: #6b6a6a;
    position: absolute;
    right: 20px;
  }
}
</style>