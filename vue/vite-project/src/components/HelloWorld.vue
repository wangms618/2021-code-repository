<template>
  <h1>{{ state.count }} *2 = {{ double }} - {{ num }}</h1>
  <button @click="add">累加</button>
</template>

<script>
// 更利于tree-shaking
import { reactive, computed, ref, onMounted } from "vue"; // 响应式数据
export default {
  // todo 入口函数
  // 在最早生命周期前生效
  setup() {
    const { state, double } = useCounter(1);

    // ref可以把基本数据量类型包装成响应式的
    const num = ref(2);

    function add() {
      state.count++;
      // 被ref修饰个的基本数据类型在后面加.value才能取到值
      num.value += 10;
      console.log(state.count);
    }
    // 生命周期
    onMounted(() => {
      console.log("mounted");
    });
    // return出去才能用
    return {
      state,
      add,
      double,
      num,
    };
  },
};
function useCounter(count) {
  const state = reactive({
    count,
  });

  const double = computed(() => state.count * 2);
  return {
    state,
    double,
  };
}
</script>

<style>
</style>
