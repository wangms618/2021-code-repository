# 四步简易实现vue里的watch
## watch的使用
这篇文章主要写的是watch(也可称作观察者模式)的实现，所以如何使用直接看代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <title>Document</title>
</head>
<body>
  <div id="app">
    <p>{{msg}}</p>
    <p>{{count}}</p>
    <button @click="add">add</button>
  </div>
  <script>
    let app = new Vue({
      el:'#app',
      data:{
        msg:'Hello world',
        count: 0
      },
      methods: {
        add(){
          this.count++
        }
      },
      // watch
      watch:{
        count(newVal,oldVal){
          if(newVal>=10) this.msg = 'Hello Watch'
        }
      }
    })
  </script>
</body>
</html>
```
我们需要知道的是：
1. watch里函数名必须是data数据源里对象的key值，这样才能对data数据源里对应key值的对象进行监听。
2. watch里的函数接收两个参数，第一个参数为赋的新值，第二个参数为初始值。
3. 了解Object.defineProperty的特性


## 实现
### 第一步
需求：实现一个构造函数，可以放入data数据源和watch方法，watch中函数名对应data中的键名，可以在对应函数中监听到data里对应对象的数据变化(数据劫持)。
```js
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
  vm.a = 1
}, 2000) 
// 打印出 1 0 就实现了需求
```
了解了需求，接下来我们来实现它

### 第二步，建立构造函数

首先，Watcher构造函数有一个参数，参数里应该放上data和watch，所以我们需要判断参数里是否能够拿到data和watch，且需要用一个函数来判断data和watch是否是一个对象
```js
class Watcher{
  constructor(args) {
    // 判断传入的参数是否符合条件
    this.$data = this.getBaseType(args.data) === "Object" ? args.data : {}
    this.$watch = this.getBaseType(args.watch) === "Object" ? args.watch : {}
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target) // "[Object String]"
    // 返回类型 
    return typeStr.slice(8, -1)
  }
}

```
### 第三步
如果传入参数里data和watch都为对象，开始做**数据劫持**，使data里的每一个对象都被监听。
```js
class Watcher {
  constructor(args) {
    this.$data = this.getBaseType(args.data) === "Object" ? args.data : {}
    this.$watch = this.getBaseType(args.watch) === "Object" ? args.watch : {}
    // 遍历data里的每一个key
    Object.keys(args.data).forEach(key => {
      this.setData(key)
    })
  }
  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target)
    return typeStr.slice(8, -1)
  }
  setData(_key) {
    // Object.defineProperty(this)会把上下文指向当前的对象
    // 这里的this就等同于构造函数里的this.$data
    Object.defineProperty(this, _key, {
      get: function () {

      },
      // // 对应值_key的值改变会触发set
      set: function (val) {
        // val为对应key的对象被修改的后的值
        console.log(val)
      }
    })
  }
}
```
注意：defineProperty第一个参数放的不是this.$data而是this,这里是令人疑惑的一个点，具体原因请看注释,你可能会说为什么不用this.$data作为第一个参数，但是显然，既然this已经等同于构造函数里的this.$data，那么defindProperty里的this.$data就等同于构造函数里的this.$data.$data。希望这样解释能够消除你的疑惑。
### 第四步
完善defineProperty里的结构，这里是最关键的，这里看代码更好理解
```js
class Watcher {
  constructor(args) {
    this.$data = this.getBaseType(args.data) === "Object" ? args.data : {}
    this.$watch = this.getBaseType(args.watch) === "Object" ? args.watch : {}
    // 遍历data里的每一个key，for in也可以遍历对象中的key
    Object.keys(args.data).forEach(key => {
      this.setData(key)
    })
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
// 打印 1 0
```
到这里就实现了watch