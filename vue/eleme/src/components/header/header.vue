<!--类似于wxml-->
<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <!-- MVVM 数据 -->
        <img :src="seller.avatar" width="64" height="64" alt="" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <div class="name">{{ seller.name }}</div>
        </div>
        <div class="description">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
        <div class="support-count" @click="showDetail">
          <span class="count">{{ seller.supports.length }}个</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // 声明外面一定会传一个seller的对象过来
  props: {
    seller: {
      type: Object,
    },
  },
  data() {
    return {
      detailShow: false,
    };
  },
  methods: {
    showDetail() {
      this.detailShow = !this.detailShow;
    },
  },
};
</script>
<style lang="stylus" scoped>
.header {
  position: relative;
  overflow: hidden;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);

  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;

    .avatar {
      display: inline-block;
      vertical-align: top;

      img {
        border-radius: 2px;
      }
    }

    .content {
      display: inline-block;
      margin-left: 1rem;

      .title {
        margin: 2px 0 8px 0;

        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }

      .suppert {
        .text {
          line-height: 12px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>