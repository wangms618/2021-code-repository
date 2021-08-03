// 2.0 默认递归，改变数组的length属性是无效的，对象不存在的属性是不能被劫持的

let toProxy = new WeakMap() // 原对象 ： 代理过的对象
let toRaw = new WeakSet() // 代理过的对象 : 原对象

function isObject(val) {
  return typeof val === 'object' && val !== null
}


function reactive(target) {
  // 创建响应式对象
  return createReactiveobject(target)
}

function createReactiveobject(target) {
  if (!isObject(target)) { // 如果不是对象的话，直接返回
    return target
  }
  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }
  let baseHandler = {
    get(target, key, receiver) {
      console.log('获取');
      let result = Reflect.get(target, key, receiver)
      // 取到的那一刻发现是对象才去做下一次递归
      return isObject(result) ? reactive(result) : result // 递归多层代理
    },
    set(target, key, value, receiver) {
      // console.log('新增');
      // 不存在直接植入，新增的属性可以劫持
      let hadKey = target.hasOwnProperty(key)
      let oldValue = target[key]
      if (!hadKey) {
        console.log('新增');
      } else if (oldValue !== value) { // 旧值不等于新值
        console.log('修改');
      }
      // 将代理好的对象内部的值改动
      let res = Reflect.set(target, key, value, reactive)
      return res
    }
  }
  let observed = new Proxy(target, baseHandler) // 代理target
  toProxy.set(target, observed)
  toRaw.add(observed,target)
  return observed
}

// let proxy = reactive({
//   name: 'westbrook',
//   age: {
//     n: 18
//   }
// })

// console.log(proxy.age);
// proxy.age.n = 17
let obj = {
  name: '慧慧',
  age: 18
}
let proxy = reactive(obj)
proxy.name = 'wn'