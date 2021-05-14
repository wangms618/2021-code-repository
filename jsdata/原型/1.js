// Person.prototype -- 原型
// 函数被定义出来天生就具备 prototype 属性 Person.prototype = { }]
Person.prototype.name = '敏敏'
Person.prototype.say = function () {
  console.log('有点虚');
}

function Person() {
  this.name = '小王'
}
var person = new Person()
console.log(person)