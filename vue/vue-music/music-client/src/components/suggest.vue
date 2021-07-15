<template>
  <v-scroll
    class="suggest"
    :pullup="pullup"
    @scrollToEnd="searchMore"
    :beforeScroll="beforeScroll"
    @beforeScroll="listScroll"
  >
    <ul class="suggest-list">
      <li class="suggest-item">
        <div class="icon">
          <i class="icon">&#xe641;</i>
        </div>
        <div class="name">
          <p class="text">青花瓷</p>
        </div>
      </li>
    </ul>
  </v-scroll>
</template>

<script>
import scroll from "@/components/scroll";
import api from '@/api'
export default {
  props: {
    query: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pullup: true,
      beforeScroll: true,
      page: 1,
      result: [],
      hasMore: true,
    };
  },
  components: {
    "v-scroll": scroll,
  },
  methods: {
    searchMore() {},
    listScroll() {},
    search() {
      this.page = 1;
      this.hasMore = true;
      this.result = [];
      this.fetchResult(this.page);
    },
    fetchResult(page) {
      const params = {
        limit: 20,
        offset: page - 1,
        keywords:this.query
      }
      api.MusiceSearch(params).then(res=>{
        console.log(res);
      })
    },
  },
  watch: {
    query(newValue) {
      if (!newValue) {
        return;
      }
      this.search(newValue);
    },
  },
};
</script>

<style lang="less">
@import "../assets/css/function.less";
.suggest {
  height: 100%;
  overflow: hidden;

  .suggest-list {
    .px2rem(padding-left, 60);
    .px2rem(padding-right, 60);

    .suggest-item {
      display: flex;
      align-items: center;
      .px2rem(line-height, 80);
    }

    .icon {
      .px2rem(width, 60);
      font-size: 14px;
      color: #fff;
    }

    .name {
      flex: 1;
      font-size: 14px;
      color: #fff;
      overflow: hidden;

      .text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .loading-wraper {
      .px2rem(height, 80);
    }
  }

  .no-result-wrapper {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    span {
      font-size: 14px;
      color: hsla(0, 0%, 100%, 0.3);
    }
  }
}
</style>