// function object(o) {
//   function F() {
//     F.prototype = o
//     return new F()
//   }
// }

// var obj = { name: '帅哥' }
// let res = object(obj)


var person = {
  name: 'giegie',
  colors: ['green', 'red', 'blue']
}

var anotherPerson1 = Object.create(person)
var anotherPerson2 = Object.create(person)
anotherPerson1.colors.push('yellow')
console.log(anotherPerson1.colors);
console.log(anotherPerson2.colors);

let c = Object.create(null)
// 不传对象，他就没有原型
// Object.create()方法创建一个新的对象，
// 并以方法的第一个参数作为新对象的__proto__属性的值（以第一个参数作为新对象的构造函数的原型对象）
// Object.create()方法还有第二个可选参数，是一个对象，对象的每个属性都会作为新对象的自身属性，
// 对象的属性值以descriptor（Object.getOwnPropertyDescriptor(obj, 'key') ）的形式出现，且enumerable默认为false
