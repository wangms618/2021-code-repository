<template>
  <div class="header">
    <div class="header-icon"  @click="showSide">
      <slot name="left-icon"></slot>
    </div>
    <div class="header-cont">
      <!-- 插槽  没有意义 占个位-->
      <slot name="content"></slot>
    </div>
    <div class="header-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showSide(){
      // this.$store.commit("showSide")
      // dispatch触发action里的函数
      this.$store.dispatch('setShowSidebar',true)
    }
  },
};
</script>

<style lang="less">
// 引入css
@import "../assets/css/function.less";

.header {
  .px2rem(height,88);
  .px2rem(line-height,88);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  .px2rem(font-size,30);
  padding: 0 10px;
  .header-iocn {
    .px2rem(width,88);
    cursor: pointer;
    .icon {
      .px2rem(font-size,48);
    }
  }
  .header-cont {
    flex: 1;
    text-align: center;
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    //   超出则打点
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>