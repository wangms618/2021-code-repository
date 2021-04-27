// 实现一个函数，将两个数字相加，并以二进制形式返回它们的和。转换可以在加法之前或之后进行。
// 返回的二进制数应该是字符串。
function addBinary(a,b) {
  // var c = a + b
  // return c.toString(2)
  return (a+b).toString(2)
}
console.log(addBinary(1, 3))
console.log(typeof addBinary(1,3))