// JavaScript并不具备动态作用域 所以才根据词法作用域的规则使a输出为2
function foo() {
  console.log(a); // 2
}
function bar() {
  var a = 3;
  foo();
}
var a = 2;
bar();

// 动态作用域并不关心函数和作用域是如何声明以及在何处声明的，只关心它们从何处调用
var obj = {
  m: function m() {
    console.log(this.msunh)
  },
  msunh: 97
}
var msunh = 1997;
var n = obj.m;
obj.m()    // 97
n() //1997
