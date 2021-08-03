<template>
  <div>
    <div>你好</div>
    <test :msg="nums" @func="changeNum">{{nums}}</test>
    <!-- <router-link to="/view/view11">V1子路由1</router-link>
    <router-link to="/view/view12">V2子路由2</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
import test from "@/components/test.vue";
export default {
  components: {
    test,
  },
  data() {
    return {
      nums: 2,
    };
  },
  methods: {
    changeNum(data) {
      this.nums = data;
    },
  },
};
</script>

<style>
</style>