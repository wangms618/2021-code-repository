<template>
  <div>
    <h2>{{msg}}</h2>
    <h3>{{$store.state.count}}  --  {{count}}</h3>
    <p>
      <!-- 引用方法 commit -->
      <!-- 第二个是传递的是参数 -->
        <!-- <button @click="$store.commit('add',10)">+</button> -->
        <button @click="add(10)">+</button>
        <!-- <button @click="$store.commit('reduce')">-</button> -->
        <button @click="reduce">-</button>
    </p>
    
  </div>
</template>

<script>
import store from '@/store/store'
import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
  data() {
    return {
      msg:'Hello Vuex'
    }
  },
  // 第一种
  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   }
  // },

  // 第二种
  // computed:mapState({
  //   count:state=>state.count,
  // }),

  // 第三种
  computed:{
    ...mapState(['count']),
    // count(){
    //   return this.$store.getters.count;
    // }
    ...mapGetters(['count'])
  },
  // 简化写法，将$store.commit('reduce')这种调用简化为reduce
  methods: mapMutations(['add','reduce']),
  store
}
</script>

<style>

</style>