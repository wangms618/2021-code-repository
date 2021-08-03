<template>
  <div id="app">
    <!-- <router-link to="/view" tag="p">去V1</router-link> -->
    <!-- <router-link to="/view2" tag="p">去V2</router-link> -->
    <!-- <router-link to="/view/view11">去V2子路由</router-link> -->
    
    <router-view />
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
