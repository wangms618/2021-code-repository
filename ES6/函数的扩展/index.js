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


// // rest
// function add(...values) {
//   let sum = 0
//   for (let val of values) {  // val 遍历数组没一项
//     sum += val
//   }
//   return sum
// }
// console.log(add(1,2,3,4,5,6)) //21

// function foo() { }
// console.log(foo.name) // foo


// 箭头函数
// var f = v => v

// var f = function (v) {
//   return v
// }

// 多个形参时要括号
// var f = (v,z) => v

// 花括号里面不止一条语句
// var f = (v, z) => {
//   v = 4
//   return z
// }


// // 不需要return 
// var f = (v,z) => void v

// // 普通函数和箭头函数
// [1, 2, 3].map(function (x) {
//   return x*x
// })
// [1, 2, 3].map(x => x * x)

// 函数被谁调用，他的this就指向谁
// var x = 123
// function foo() {
//   console.log(this.x);
// }
// foo() //123

// var a = 111
// var obj = {
//   a: 123,
//   foo: function () {
//     console.log(this.a); //123
//   }
// }
// obj.foo()


// var a = 111
// var obj = {
//   a: 123,
//   foo: function () {
//     console.log(this.a); //111
//   }
// }
// // obj.foo不是调用，这里将其赋给bar,调用bar()等于在全局环境下调用obj.foo()，所以this指向window，console.log(this.a)输出111
// var bar = obj.foo
// bar() 




// 箭头函数内的this对象，就是定义时所在的对象，而不是使用时所在的对象
// var a = 111
// var obj = {
//   a: 123,
//   foo: () => {
//     console.log(this.a); //111
//   }
// }
// var bar = obj.foo
// bar() 

// var obj = {
//   birth: 2000,
//   getAge: function () {
//     var b = this.birth
//     var fn = function () {
//       return new Date().getFullYear() - this.birth
//     }
//     return fn()
//   }
// }
// console.log(obj.getAge()) //NaN ,因为两个this.birth不同

// var obj = {
//   birth: 2000,
//   getAge: function () {
//     var b = this.birth
//     var fn = function () {
//       return new Date().getFullYear() - b
//     }
//     return fn()
//   }
// }
// console.log(obj.getAge()) //21

// var obj = {
//   birth: 2000,
//   getAge: function () {
//     var b = this.birth
//     var fn = () => {
//       return new Date().getFullYear() - this.birth //箭头函数不认识this ，写了this被箭头函数所处的环境读到，不是当前箭头函数
//     }
//     return fn()
//   }
// }
// console.log(obj.getAge()) // 21 

var obj = {
  birth: 2000,
  getAge: function () {
    var b = this.birth
    let that = this //语言精粹
    var fn = function () {
      return new Date().getFullYear() - that.birth
    }
    return fn()
  }
}
console.log(obj.getAge()) //21

// 箭头函数与普通函数的区别
// 箭头更简单
// 箭头函数内部的this对象，其实就是自己所处环境的this对象，并不是箭头函数在哪生效