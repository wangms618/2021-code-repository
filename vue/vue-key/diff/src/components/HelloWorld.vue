<template>
  <div class="test">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <button @click="change">delete</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
  methods: {
    change() {
      this.list.splice(0,1)
    },
  },
};
</script>

<style>
</style>