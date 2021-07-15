<template>
  <div class="player" v-if="getPlaySong !== null">
    <transition name="normal">
      <div class="normal-player">
        <div class="background">
          <img width="100%" height="100%" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-ad8b04b5093adf62ef70ec3f1e0c2abf_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628930393&t=9061757c3bc63fe4729d56b18d8940b6" alt="">
        </div>
        <div class="top">
          <div class="back">
            <i class="icon">&#xe8e2;</i>
          </div>
          <h1 class="title">{{getPlaySong.name}}</h1>
          <h2 class="subtitle">{{getPlaySong.artists[0].name}}</h2>
        </div>
      </div>
    </transition>
    <!-- audio -->
    <audio :src="musicUrl" ref="audio" autoplay></audio>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'
export default {
  data() {
    return {
      musicUrl: ''
    }
  },
  computed:{
    ...mapGetters(['getPlaySong'])
  },
  watch: {
    getPlaySong(newValue) {
      api.MusicUrl(newValue.id).then(res => {
        console.log(res);
        this.musicUrl = res.data.data[0].url
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/css/function.less";
.player{
  z-index: 150;
  .normal-player{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background: rgb(8, 5, 58);
    .background{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(20px);
    }
    &.normal-enter-active,
    &.normal-leave-active {
      transition: all 0.4s;
      .top,
      .bottom {
        transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
      }
    }
    &.normal-enter,
    &.normal-leave-to {
      opacity: 0;
      .top {
        transform: translate3d(0, -100px, 0);
      }
      .bottom {
        transform: translate3d(0, 100px, 0);
      }
    }
    .top {
      position: relative;
      margin-bottom: 25px;
      .back {
        position: absolute;
        top: 0;
        .px2rem(left, 12);
        z-index: 50;
        .icon {
          display: block;
          .px2rem(height, 100);
          .px2rem(line-height, 100);
          .px2rem(padding-left, 30);
          .px2rem(padding-right, 30);
          font-size: 22px;
        }
      }
      .title {
        width: 70%;
        margin: 0 auto;
        .px2rem(line-height, 100);
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 18px;
        color: #fff;
      }
      .subtitle {
        .px2rem(line-height, 40);
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>