<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- 路由 -->
      <router-link to="/Hi">Hi</router-link> |
      <!-- 这里name一定要和index.js里的name相等，才可以传参 -->
      <router-link :to="{name:'Hi1',params:{username:'JSPang',id:'888'}}">Hi1</router-link> |
      <router-link to="/Hi/hi2">Hi2</router-link> |
      <!-- 对应index.js里的格式 -->
      <router-link to="/params/198/jspang website is very good">params</router-link> |
      <router-link to="/goHome">重定向</router-link>
      <router-link to="/goParams/918/l like vue.js">goParams</router-link>
    </div>
    <!-- 显示router中的name -->
    <!-- <p>{{$route.name}}</p> -->
    <router-view />
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

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
