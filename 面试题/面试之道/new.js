// new实现
// 创建对象
// 设置对象原型
// 绑定this并执行构造函数
// 返回该对象
function myNew() {
  let obj = {}
  let fn = [].shift.call(arguments)
  obj.__proto__ = fn.prototype
  let result = fn.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
