// 如何加方法？
// jser 来自喵星人的世界
function Cat(name, color) { //类
  // this指向 new过后的实例
  this.name = name
  this.color = color
  // 构造函数一般不放方法
  // this.sayHello = function(){
  //   console.log("喵喵喵")
  // }
  // 其他语言class就是一个围城，围住构造函数等等
}
// 任何对象sayHello都会重新执行一次
// 实例化时，执行的就是constructor
// .prototype，JS的原型机制  constructor + prototype = JS面向对象
Cat.prototype.sayHello = function () {
  console.log("喵喵喵")
}
Cat.prototype.eat = function () {
  console.log('jerry');
}
let cat1 = new Cat('阿花', '花色')
cat1.sayHello();
// 私有属性.__proto__  可以指向任何一个对象
// JS基于原型式的面向对象
// JS对象，没有血缘关系
// 构造函数如同火车头
// 原型对象如图车厢有好多节
// .prototype 原型式的面向对象
// 任何一个函数都有一个prototype属性
// 函数是一个对象
console.log(cat1.__proto__);

// Cat.prototype是一个对象


// 可以用比喻



