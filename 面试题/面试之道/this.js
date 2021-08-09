// 如果在全局作用域中用var声明变量，此变量会默认成为window的一个属性，let声明的变量则不会添加到window对象中。
// this
var names = '杰杰'
// let names = '杰杰'  // 无效
let obj = {
  names:'杰哥'
}
function person() {
  console.log(this.names);
}
person()