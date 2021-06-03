SuperType.prototype.sayName = function () {
  console.log(this.name);
}
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'green', 'blue']
}

SubType.prototype = new SuperType()
SubType.prototype.sayAge = function () {
  console.log(this.age);
}
function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

// SuperType.prototype.sayAge = function () {
//   console.log(this.age);
// }
var instance1 = new SubType('凯凯', 18)
instance1.colors.push('pink')
console.log(instance1.colors); // ['red', 'green', 'blue', 'pink']
instance1.sayName() // '凯凯'
instance1.sayAge() // 18

var instance2 = new SubType('张欧文', 20)
console.log(instance2.colors); // [ 'red', 'green', 'blue' ]
instance2.sayName() // 张欧文
instance2.sayAge() // 20