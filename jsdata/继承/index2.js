// 经典继承 == 构造函数继承
function SuperType() {
  this.colors = ['red', 'green', 'blue']
}
function SubType() {
  SuperType.call(this)
}
var instance = new SubType()
var instance2 = new SuperType()
var instance3 = new SubType()
instance.colors.push('pink')
console.log(instance.colors); // [ 'red', 'green', 'blue', 'pink' ]
console.log(instance2.colors); // [ 'red', 'green', 'blue' ]
console.log(instance3.colors); // [ 'red', 'green', 'blue' ]