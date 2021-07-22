<template>
  <div id="app">
    {{this.$store.state.num}}
    {{this.$store.getters.newNum}}
    <button @click="add">+1</button>
    <button @click="addsync">+2</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    add(){
      this.$store.commit('increase',1)
    },
    addsync(){
      this.$store.dispatch('asyncIncrease',1)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
