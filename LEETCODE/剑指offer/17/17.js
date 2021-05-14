// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
var printNumbers = function (n) {
  // let arr = []
  // for (let i = 1; i < 10 ** n; i++) {
  //   arr.push(i)
  // }
  // return arr
  let num = 1
  let arr = []
  while (num.toString().length <= n) {
    arr.push(num)
    num++
  }
  return arr
};
console.log(printNumbers(2));
// var len = n.toString().length