// 原型链继承
function SuperType() {  // 超类
  this.proerty = true
}

SuperType.prototype.getSuperValue = function () {
  return this.proerty
}

function SubType() {
  this.subproperty = false
}
// 继承，用SuperType类型的一个实例来重写SubType类型的原型对象
SubType.prototype = new SuperType()

SubType.prototype.getSuperValue = function () {
  return this.subproperty
}

var instance = new SubType()
console.log(instance.getSuperValue());
console.log(instance.proerty);
// instance -> SubType的原型 -> SuperType的原型 -> Object的原型