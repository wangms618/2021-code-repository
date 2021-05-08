// function log(x, y = 'world') {  //默认参数
//   console.log(x, y);
// }
// log('hello')//hello world

// function log2(x, y) {
//   console.log(x, y);
// }
// log2({ a: 1, b: 2 }) //{ a: 1, b: 2 } undefined

// function log3({ x, y }) {
//   console.log(x, y);
// }
// log3({ x: 1, y: 2 })  // 1 2


// var x = 1
// function f(x, y = x) {
//   console.log(y)
// }
// f(2)// 2

// var x = 1
// function f(y = x) {
//   let x = 2
//   console.log(y)
// }
// f() // 1

// var x = 1
// function f(x = x) { // 相当于let x = x 
//   console.log(x)
// }
// f()  //ReferenceError: Cannot access 'x' before initialization


// var x = 1
// function test() {
//   let x = x //暂时性死区
//   console.log(x)
// }
// test()//ReferenceError: Cannot access 'x' before initialization


// let test = () => 123
// console.log(test()) // 123
// let test2 = function () { return 123 }
// console.log(test2()) // 123
// // 上面两个效果是一样的，=> 123 不加花括号默认加上return 


// let foo = 'outer'
// function bar(func = () => foo) { //return foo
//   let foo = 'inner'
//   console.log(func())
// }
// bar() //outer

// var x = 1
// function foo(x, y = function () { x = 2 }) {
//   var x = 3
//   y()
//   console.log(x);//先搜索自己作用域，然后再去找
// }
// foo() // 3



// // rest
// function add(...values) {
//   console.log(values)
// }
// add(1,2,3,4,5,6) // [ 1, 2, 3, 4, 5, 6 ]


// rest
function add(...values) {
  let sum = 0
  for (let val of values) {
    sum += val
  }
  return sum
}
console.log(add(1,2,3,4,5,6))