<template>
  <div>
    <div class="container">{{ msg }}</div>
    <button @click="Transfer">Transfer</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      nums: 4,
    };
  },
  methods: {
    Transfer() {
      this.$emit("func", this.nums);
    },
  },
};
</script>

<style>
</style>