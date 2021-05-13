// 包装类
// var num = 123
// num.abc = 'aaa'
// console.log(num); // 123

// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num.abc); // aaa
// console.log(num*2); //246
// 和前面没差别

var num = 4
// 执行时是这样的 var num = new Number(4)

var num = 4
num.len = 3 //undefined
// var num = new Number(4).len = 3
// 执行引擎发现num是原始类型于是 delete num.len


console.log(num.len); // 执行 new Number(4).len 所以不报错，但是会undefined

// 这个隐式的过程就叫做包装类

// 考点
var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr); //[ 1, 2 ]

var str = 'abcd' // 隐式
str.length = 2
// new String('abcd').length = 2
// delete str.length
delete str.length // 无效语句  console.log(str.length)结果依旧为4
console.log(str); //abcd
console.log(str.length); // 4
// new String('abcd').length 字符串对象，天生具备length属性

