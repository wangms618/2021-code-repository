<template>
  <div id="app">
    <!-- <SanseVerifyCode></SanseVerifyCode> -->
    <wms-sanse-verify-code></wms-sanse-verify-code>
  </div>
</template>

<script>
// import SanseVerifyCode from './sanse-verify-code.vue'
// import WmsSanseVerifyCode from 'wms-sanse-verify-code'
// Vue.use(WmsSanseVerifyCode)
export default {
  name: 'App',
  components: {
    // SanseVerifyCode
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
