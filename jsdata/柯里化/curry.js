var curry = function (fn) {
  // let arr = [...arguments].slice(1)
  // arr.shift()
  var args = [].slice.call(arguments, 1)
  return function () {
    var newArr = args.concat([].slice.call(arguments))
    return fn(...newArr)
    // return fn(...args, ...arguments)

  }
}
function add(a, b) {
  return a + b
}
var addCurry = curry(add, 2)
console.log(addCurry(1));