import Vue from "vue"
class Store {
  constructor(options) {
    // this.state = options.state || {}
    this.vm = new Vue({
      data: {
        state:options.state
      }
    })
    let getters = options.getters || {}
    this.getters = {}
    Object.keys(getters).forEach(getterName => {
      Object.defineProperty(this.getters, getterName, {
        get: () => {
          return getters[getterName](this.state) // 页面调用不需要打括号
        }
      })
    })
    // mutations
    let mutations = options.mutations
    this.mutations = {}
    Object.keys(mutations).forEach(mutationName => {
      this.mutations[mutationName] = (arg) => {
        mutations[mutationName](this.state,arg)
      }
    })
    // actions
    let actions = options.actions
    this.actions = {}
    Object.keys(actions).forEach(actionsName => {
      this.actions[actionsName] = (arg) => {
        actions[actionsName](this,arg)
      }
    })
  }
  commit = (method,arg) =>{
    this.mutations[method](arg)
  }
  dispatch(method, arg) {
    this.actions[method](arg)
  }
  get state() {
    return this.vm.state
  }
}

let install = function (Vue) {
  Vue.mixin({
    beforeCreate() {
      // 去到当前组件
      if (this.$options && this.$options.store) { // 这是根组件
        this.$store = this.$options.store
      } else { // 子组件
        // 若符号”&&”前的表达式如果为假，那么后面的那个表达式将不会被执行，这里就是先判断是否有this.$parent，如果有则将this.$store赋值为this.$parent.$store 
        this.$store = this.$parent && this.$parent.$store 
      }
    },
  })
} 

let Vuex = {
  Store,
  install
}

export default Vuex