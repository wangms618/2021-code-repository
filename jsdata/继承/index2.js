// 经典继承 == 构造函数继承
function SuperType(color) {
  this.colors = ['red', 'green', 'blue']
  this.color = color
}
function SubType(color) {
  SuperType.call(this, color)
}
var instance = new SubType()
var instance4 = new SubType('yellow')
var instance2 = new SuperType()  // 作用域没有被影响
var instance3 = new SubType()
instance.colors.push('pink')
console.log(instance.colors); // [ 'red', 'green', 'blue', 'pink' ]
console.log(instance2.colors); // [ 'red', 'green', 'blue' ]
console.log(instance2.color); // undefined 实例instance4并未影响超类作用域
console.log(instance3.colors); // [ 'red', 'green', 'blue' ]
console.log(instance4.color); // yellow