<template>
  <div class="app">
    <v-header>
      <i class="icon" slot="left-icon">&#xe692;</i>
      <span slot="content">00:00</span>
      <i class="icon" slot="right-icon">&#xe63c;</i>
    </v-header>
    <v-tab></v-tab>
    <!-- keep-alive保存缓存，返回页面可以返回之前的位置 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 菜单 -->
    <v-menu></v-menu>
  </div>
</template>

<script>
import header from "./components/header.vue";
import Menu from "./components/menu.vue";
import Tab from "./components/tab.vue";
export default {
  components: {
    "v-header": header,
    "v-menu": Menu,
    "v-tab": Tab,
  },
};
</script>

<style lang="less">
// 引入
@font-face {
  font-family: "icon";
  /* project id 277165 */
  src: url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot");
  src: url("//at.alicdn.com/t/font_kmywdojzhchj8aor.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.woff") format("woff"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_kmywdojzhchj8aor.svg#iconfont") format("svg");
}

.icon {
  font-family: "icon" !important;
  font-size: 18px;
  font-style: normal;
  color: #ffffff;
}

html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: linear-gradient(
      150deg,
      rgba(167, 142, 214, 0.9),
      rgba(225, 185, 229, 0.1)
    )
    fixed;
  color: #fff;
}
</style>