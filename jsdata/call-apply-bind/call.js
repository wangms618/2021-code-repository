// 将要改变this指向的方法挂到目标this上执行并返回
var a = {
  name: '金总'
}
// var fn = function () {
//   console.log(this.name);
// }
// fn.call(a)


Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  context = context || window
  context.fn = this
  console.log(arguments)
  let arg = [...arguments].slice(1)
  console.log(arg)
  let result = context.fn(...arg)
  delete context.fn
  return result
}
function test(x, y, z) {
  // console.log(this.name)
  // console.log(x, y, z);
}
test.mycall(a, 1, 2, 3)