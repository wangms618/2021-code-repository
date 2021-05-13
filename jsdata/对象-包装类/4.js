var str = 'abcd'
str += 1
var test = typeof (str)
console.log(test) // string
console.log(test.length) // 6
if (test.length == 6) {
  test.sign = 'typeOF返回结果是string'
  // var test = new String(string).sign = 'typeOF返回结果是string'
  // delete test.sign
}
console.log(test.sign); //undefined