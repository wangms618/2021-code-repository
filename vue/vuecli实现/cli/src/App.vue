<template>
  <div><h1>1111</h1>你好我是牛牛牛</div>
</template>

<script>
export default {
  setup() {
    const testFunction = () => {
      console.log("测试一下babel");
    };
    return {
      testFunction,
    };
  },
};
</script>

<style>
div {
  color: yellowgreen;
}
</style>