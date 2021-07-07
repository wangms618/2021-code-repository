<template>
  <div class="header" @click="showDetail">
    <div class="content-wrapper" v-if="seller.supports">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="description" >
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <!-- 活动 -->
        <div class="support" v-if="seller.supports">
          <support-ico :size="2" :type="seller.supports[0].type"></support-ico>
          <span class="texts">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count">{{ seller.supports.length }}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!-- 公告 -->
    <div class="bulletin-warpper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 背景 -->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%" alt="" />
    </div>
    <header-detail :seller="seller" v-show="detailVisible" @hide="hideDetail"></header-detail>
  </div>
</template>

<script>
import SupportIco from "@/components/support-ico/support-ico";
import HeaderDetail from "@/components/header-detail/header-detail.vue";
export default {
  components: {
    SupportIco,
    HeaderDetail,
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
    return {
      detailVisible:false
    }
  },
  methods:{
    showDetail(){
      this.detailVisible = true
    },
    hideDetail(e){
      console.log(e);
      this.detailVisible = e
    }
  }
};
</script>

<style lang='less'>
.header {
  position: relative;
  overflow: hidden;
  color: #fff;
  background: rgba(7, 17, 27, 0.5);
}
.content-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px 12px 18px 24px;
}
.avatar {
  flex: 0 0 64px;
  margin-left: 16px;
  img {
    border-radius: 2px;
  }
}

.content {
  flex: 1;
  margin-left: 10px;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    .brand {
      width: 30px;
      height: 18px;
      background: url("./brand@2x.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .name {
      margin-left: 6px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .description {
    margin-bottom: 8px;
    line-height: 12px;
    font-size: 12px;
  }
  .support {
    display: flex;
    align-items: center;
    .support-ico {
      margin-right: 4px;
    }
    .texts {
      line-height: 12px;
      height: 12px;
      font-size: 12px;
    }
  }
}
.support-count {
  position: absolute;
  right: 12px;
  bottom: 14px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 14px;
  background: rgba(7, 17, 27, 0.2);
  font-size: 10px;
}
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);
}
.bulletin-warpper {
  position: relative;
  display: flex;
  align-items: center;
  height: 28px;
  line-height: 28px;
  padding: 0 8px;
  background: rgba(7, 17, 27, 0.2);
  .bulletin-title {
    flex: 0 0 22px;
    width: 22px;
    height: 12px;
    margin-right: 4px;
    background-image: url("bulletin@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .bulletin-text {
    flex: 1;
    // 不换行
    white-space: nowrap;
    // 超出打点
    text-overflow: ellipsis;
    // 超出隐藏
    overflow: hidden;
    font-size: 10px;
  }
  .icon-keyboard_arrow_right {
    flex: 0 0 10px;
    width: 10px;
    font-size: 10px;
  }
}
</style>