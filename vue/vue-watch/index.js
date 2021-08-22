class Watcher {
  constructor(args) {
    this.$data = this.getBaseType(args.data) === "Object" ? args.data : {}
    this.$watch = this.getBaseType(args.watch) === "Object" ? args.watch : {}
    // 遍历data里的每一个key
    Object.keys(args.data).forEach(key => {
      this.setData(key)
    })
    // for (let key in args.data) {

    // }
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target) // "[Object String]"
    // 返回类型 
    return typeStr.slice(8, -1)
  }
  setData(_key) {
    // Object.defineProperty(this)会把上下文指向当前的对象
    // 这里的this就等同于构造函数里的this.$data
    Object.defineProperty(this, _key, {
      get: function () {
        return this.$data[_key]
      },
      set: function (val) {
        const oldVal = this.$data[_key]
        if (oldVal === val) return val
        this.$data[_key] = val
        // 这里定义规定了watch里格式必须是同名，且要为函数
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === "Function" && (
          // 传值
          this.$watch[_key].call(this, val, oldVal)
        )
      }
    })
  }
}


let vm = new Watcher({
  data: {
    a: 0,
    n: 'hello'
  },
  watch: {
    a(newValue, oldValue) {
      console.log(newValue, oldValue);
    }
  }
})


setTimeout(() => {
  vm.a = 1
}, 2000)