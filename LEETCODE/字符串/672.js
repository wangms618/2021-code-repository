var addBinary = function (num1, num2) {
  let res = ''
  let i1 = num1.length - 1
  let i2 = num2.length - 1
  let carry = 0 // 进率
  while (i1 >= 0 || i2 >= 0) {
    // 字符串转化为数字
    const x = i1 >= 0 ? num1[i1] - '0' : 0
    const y = i2 >= 0 ? num2[i2] - '0' : 0
    const sum = x + y + carry // 进率加当前位置数字的和
    res += (sum % 2) // 二进制最大为1，所以排除单个字符为2的情况
    carry = Math.floor(sum / 2) // 求前两个字符相加的情况，也就是求进位
    i1--
    i2--
  }
  if (carry) res += carry // 最后将最终的进位放上
  // 反转字符串
  return res.split("").reverse().join("")

};
console.log(addBinary('1110', '101'));
