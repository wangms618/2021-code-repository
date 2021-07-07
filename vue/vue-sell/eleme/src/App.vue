<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import VHeader from './components/v-header/v-header.vue'
import {getSeller} from '@/api'
export default {
  data(){
    return{
      seller:{}
    }
  },
  components:{
    VHeader
  },
  created(){
    getSeller().then(res=>{
      // console.log(res);
      this.seller = res
    })
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
}
.tab{
  display: flex;
  line-height: 36px;
  height: 36px;
  width: 100%;
  .tab-wrapper{
    flex: 1;
    text-align: center;
    justify-content: center;
    // line-height: 30px;
    font-size: 16px;
    a{
      display: inline-block;
      width: 100%;
      text-decoration: none;
      color: #666;
    }
    // 此时选择的类名
    // 只要点击过的标签就会生成一个router-link-active的类名
    // 当前点击的标签会生成一个router-link-exact-active类名
    .router-link-exact-active{
      color: #f01414;
      border-bottom: 2px solid #f01414;
    }
    
  }
}
</style>
