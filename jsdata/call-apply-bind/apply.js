var a = {
  name: '2300'
}
Function.prototype.myapply = function (context) {
  // 判断是否函数调用
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  // 判断参数
  context = context || window
  context.fn = this
  // console.log(arguments)
  // [arg] 表示从[]按照位置中取值
  let [arg] = [...arguments].slice(1)
  // console.log(...arg)
  let result = context.fn(...arg)
  delete context.fn
  return result
}
function test(x, y, z) {
  console.log(this.name);
  console.log(x, y, z)
}
test.myapply(a, [1, 2, 3])