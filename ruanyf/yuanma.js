// 如何加方法?
// jser 来自喵星人的世界
function Cat(name,color){  // 类
  // this 指向new过后的实例
  this.name = name
  this.color = color
  // 构造函数一般不放方法

  // this.sayHello = function(){
  //     console.log("喵喵喵");
  // }
}
// class 关键字 围城  比喻
// JS原型机制
// constructor + prototype = 
// JS面向对象
// JS基于原型式的面向对象 
// 没有血缘关系
// 构建函数如同火车头 
// 原型对象如同车厢， 有好多节 
// .prototype  
const o = { // 原型对象 没有血缘
  sayHello: function() {
    console.log("喵喵喵");
  },
  eat: function() {
    console.log('jerry 来一下');
  }
}
// 任何一个函数都有一个prototype属性
// 函数是一个对象
Cat.prototype = o;

// 任何对象sayHello 都会重新执行一次， 
// 实例化时， 执行就constructor
let cat1 = new Cat('阿花', '花色');
cat1.sayHello();
cat1.eat();
console.log(cat1.__proto__);
// 继承
// 判断一个对象是否是你的原型对象.isPrototypeOf
console.log(Cat.prototype.isPrototypeOf(cat1));
console.log(cat1.hasOwnProperty("name"));//true
console.log(cat1.hasOwnProperty("sayHello"));//false