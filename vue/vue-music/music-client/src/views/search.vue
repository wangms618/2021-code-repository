<template>
  <div class="search">
    <div class="search-box-wrapper">
      <!-- 这里ref是第一步，可以借此进入组件调用组件的函数 -->
      <v-search-box @query="searchContent" ref="searchBox"></v-search-box>
    </div>
    <div class="search-result" v-show="query">
      <v-suggest :query="query" @select="saveSearch"></v-suggest>
    </div>
    <!-- 热门搜索、搜索历史 -->
    <div class="shortcut-wrapper" v-show="!query">
      <v-scroll class="shortcut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index" @click="addQuery(item.first)">
                <span>{{ item.first }}</span>
              </li>
            </ul>
          </div>
          <div class="search-history">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="clear">
                <!-- 第一步 -->
                <i class="icon">&#xe612;</i>
              </span>
            </h1>
            <!-- 历史记录 -->
            <v-search-list
              @selectName="addQuery"
              :searches="searchHistory"
              @deleteItem="deleteSearchHistory"
            ></v-search-list>
          </div>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import searchList from "@/components/searchList";
import api from "@/api";
import scroll from "@/components/scroll";
import suggest from "@/components/suggest.vue";
import searchBox from "@/components/searchBox";
import { searchMixin } from "@/common/js/mixin.js";
export default {
  data() {
    return {
      hotKey: [],
    };
  },
  // 混入
  mixins: [searchMixin],
  components: {
    "v-search-box": searchBox,
    "v-suggest": suggest,
    "v-scroll": scroll,
    "v-search-list": searchList,
  },
  methods: {
    _getHotKey() {
      api.HotSearchKey().then((res) => {
        console.log(res);
        this.hotKey = res.data.result.hots.slice(0, 10);
      });
    },
    // 第二步，第三步在mixin里面
    clear() {
      this.clearSearchHistory();
    },
    addQuery(e) {
      // $refs取到ref="searchBox"的组件，再调用里面的setQuery
      this.$refs.searchBox.setQuery(e);
    },
  },
  created() {
    this._getHotKey();
  },
  // 解构
  computed: { ...mapGetters(["searchHistory"]) },
};
</script>

<style lang="less" scoped>
@import "../assets/css/function.less";
.search {
  overflow: hidden;
  .search-box-wrapper {
    .px2rem(margin, 40);
  }
  .shortcut-wrapper {
    position: fixed;
    .px2rem(top, 360);
    bottom: 0;
    width: 100%;
    .shortcut {
      height: 100%;
      overflow: hidden;
      .hot-key {
        .px2rem(margin-right, 40);
        .px2rem(margin-bottom, 40);
        .px2rem(margin-left, 40);
        .title {
          .px2rem(margin-bottom, 40);
          font-size: 14px;
          color: #fff;
        }
        .item {
          display: inline-block;
          .px2rem(padding-top, 10);
          .px2rem(padding-bottom, 10);
          .px2rem(padding-left, 20);
          .px2rem(padding-right, 20);
          .px2rem(margin-right, 20);
          .px2rem(margin-bottom, 20);
          border-radius: 6px;
          background: #eb1052c5;
          font-size: 14px;
          color: #fff;
        }
      }
      .search-history {
        position: relative;
        .px2rem(margin-left, 40);
        .px2rem(margin-right, 40);
        .title {
          display: flex;
          align-items: center;
          .px2rem(height, 80);
          font-size: 14px;
          color: #fff;
          .text {
            flex: 1;
          }
          .clear {
            // extend-click()
            .icon {
              font-size: 18px;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .search-result {
    position: fixed;
    width: 100%;
    .px2rem(top, 360);
    bottom: 0;
  }
}
</style>