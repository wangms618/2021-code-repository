// 实现一个接收两个IPv 4地址的函数，并返回它们之间的地址数(包括第一个地址，不包括最后一个地址)。

// 所有输入都是字符串形式的有效IPv 4地址。最后一个地址总是比第一个地址大。
function ipsBetween(start, end) {
  let arr1 = start.split('.')
  let arr2 = end.split('.')
  num1 = arr1[3] * 1 + arr1[2] * 256 + arr1[1] * 256 * 256 + arr1[0] * 256 * 256 * 256
  num2 = arr2[3] * 1 + arr2[2] * 256 + arr2[1] * 256 * 256 + arr2[0] * 256 * 256 * 256
  console.log(num2 - num1);
}
ipsBetween("20.0.0.10", "20.0.1.0")//50

