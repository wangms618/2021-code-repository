class Watcher{
  constructor(opts)
  {
    this.$data = this.getBaseType(opts.data) === "Object" ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === "Object" ? opts.watch : {}
    for (let key in opts.data){  // 拿到 data对象里面的每一个key Object.keys(opts.data).forEach()
      this.setData(key)
    }
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target) // "[Object String]"
    // 返回类型 
    return typeStr.slice(8, -1)
  }
  // 做数据劫持
  setData(_key) {
    // Object.defineProperty(this)会把上下文指向当前的对象
    // this.$data = this
    // 这一步等于在this上挂载了当前遍历的key ，所以后面可以直接用 vm.a
    Object.defineProperty(this, _key, {
      get: function () {
        return this.$data[_key]
      },
      // a改变在这
      set: function (val) {
        const oldVal = this.$data[_key]
        if (oldVal === val) return val
        this.$data[_key] = val
        // 这里定义规定了watch里格式必须是同名，且要为函数
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === "Function" && (
          // 传值
          this.$watch[_key].call(this,val,oldVal)
        )
      }
    });
  }
}


let vm = new Watcher({
  data: {
    a: 0,
    n:'hello'
  },
  watch: {
    a(newValue, oldValue) {
      console.log(newValue,oldValue);
    }
  }
})


setTimeout(() => {
  vm.$data.a = 1
},2000)