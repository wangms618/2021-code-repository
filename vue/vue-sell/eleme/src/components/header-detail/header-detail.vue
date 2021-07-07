<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="star-wrapper">
            <!-- 星星 -->
            <!-- 计算评分，得出数字 -->
            <div class="star" >
              <span :class="{'starOn':isOn(1)}"></span>
              <span :class="{'starOn':isOn(2)}"></span>
              <span :class="{'starOn':isOn(3)}"></span>
              <span :class="{'starOn':isOn(4)}"></span>
              <span :class="{'starOn':isOn(5)}"></span>
            </div>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
        </div>
        <ul class="supports">
          <!-- <li
              class="supports-item"
              v-for="(item, index) in seller.supports"
              :key="index"
            > -->
          <!-- key里放唯一值 -->
          <li
            class="supports-item"
            v-for="item in seller.supports"
            :key="item.type"
          >
            <support-ico :size="2" :type="item.type"></support-ico>
            <span class="text">{{ item.description }}</span>
          </li>
        </ul>
        <div class="titles">
          <div class="line"></div>
          <div class="text">商家公告</div>
          <div class="line"></div>
        </div>
        <div class="bulletin">
          <p class="content">{{ seller.bulletin }}</p>
        </div>
      </div>
      <!-- 阻止冒泡 -->
      <div class="detail-close" @click.stop="hide">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import SupportIco from "@/components/support-ico/support-ico";
export default {
  components: {
    SupportIco,
  },
  props: {
    seller: {
      // 接收的类型
      type: Object,
      // 默认值
      default() {
        return {};
      },
    },
  },
  methods: {
    hide() {
      // 控制页面消失，要穿数据给父组件
      this.$emit("hide", false);
    },
    isOn(e){
      return e<=this.seller.score ? true : false
    }
  },
  computed:{
  }
};
</script>

<style lang="less">
.header-detail {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  overflow: hidden;
  background: rgba(7, 17, 27, 0.8);
  color: #fff;
  opacity: 1;
  // 只虚化背景
  backdrop-filter: blur(10px);
  .detail-wrapper {
    display: inline-block;
    width: 100%;
    height: 100%;
    .detail-main {
      margin-top: 64px;
      padding-bottom: 64px;
      .title {
        display: flex;
        width: 80%;
        margin: 28px auto -24px auto;
      }
      .line {
        flex: 1;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        position: relative;
        top: -10px;
      }
      .text {
        padding: 0 20px;
        font-weight: 700;
        font-size: 14px;
      }
      .name {
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
      }
      .star-wrapper {
        margin-top: 8px;
        padding: 2px 0;
        text-align: center;
      }
    }
  }
  .detail-close {
    position: relative;
    width: 30px;
    height: 30px;
    margin: -64px auto 0 auto;
    font-size: 30px;
  }
}
.supports {
  width: 80%;
  margin: 0 auto;
  .supports-item {
    list-style-type: none;
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin-bottom: 12px;
    .supports-item:last-child {
      margin-bottom: 0;
    }
    .text {
      line-height: 16px;
      font-size: 14px;
      margin-left: 6px;
    }
  }
}

// 是transition标签自动加上这两个类名,fade是自己定的,enter等是固定的
.fade-enter {
  background: #fff;
}
.fade-leave-to {
  overflow: 0;
  background: rgba(7, 17, 27, 1);
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-leave-active {
  transition: all 0.5s;
}
.bulletin {
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  .content {
    padding: 0 12px;
    line-height: 24px;
    font-size: 14px;
  }
}
.titles {
  display: flex;
  width: 80%;
  margin: 28px auto -24px auto;
}
.line {
  flex: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  top: -10px;
}
.text {
  padding: 0 20px;
  font-weight: 700;
  font-size: 14px;
}
.star {
  display: flex;
  justify-content: center;
  align-items: center;
  .starOn{
    width: 20px;
    height: 20px;
    background-image: url('./star-on.png');
    background-size: 20px 20px;
    margin-left: 22px;
    margin-top: 10px;
  }
  span{
    width: 20px;
    height: 20px;
    background-image: url('./star-off.png');
    background-size: 20px 20px;
    margin-left: 22px;
    margin-top: 10px;
  }
  span:first-child{
    margin-left: 0;
  }
}
</style>