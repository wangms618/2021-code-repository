// 数据变化了，视图就会更新

let oldArrayPrototype = Array.prototype
// 接收一个参数，以参数原型为对象
let proto = Object.create(oldArrayPrototype)
// 重写数组方法
Array.from(['push', 'shift', 'unshift', 'pop']).forEach(method => {
  // 函数劫持
  proto[method] = function () {
    oldArrayPrototype[method].call(this, ...arguments)
    updateView()
  }
})

function observer(target) { // 观察者
  if (typeof target !== 'object' || target == null) {
    return target
  }
  if (Array.isArray(target)) {
    // 重写数组原型
    target.__proto__ = proto
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  if (typeof value == 'object' && value !== null) {
    observer(value)
  }
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newVal) {
      if (newVal !== value) {
        value = newVal
        updateView(newVal)
      }
    }
  })
}

function updateView() {
  console.log('视图更新');
}

let data = {
  name: 'wn',
  age: {
    num: 2
  },
  like: {
    a: {
      hb: 'running'
    }
  },
  job: ['coder', 'driver']
}
observer(data)
// data.name = 'kk'
// data.age.num = 19
data.job.push('s')