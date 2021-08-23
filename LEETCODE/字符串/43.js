/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 此情况数字过大会溢出
//  先取下字符串最后的0
var multiply = function (num1, num2) {
  // 第一个字符串的长度
  let x = num1.length - 1
  // 第二个字符串的长度
  let y = num2.length - 1
  // 把123000这种类型的字符串去0成123，记录下倍率
  let rate = 1
  let baserate = 1
  let add = 0
  let ans = []
  let box = []
  for (let i = x; i > 0; i--) {
    if (num1[i] == '0') {
      rate = rate * 10
      x--
    } else {
      break
    }
  }
  for (let i = y; i > 0; i--) {
    if (num2[i] == '0') {
      rate = rate * 10
      y--
    } else {
      break
    }
  }
  // 第二个字符串在下
  while (y >= 0) {
    // 遍历第一个字符串
    for (let i = x; i >= 0; i--) {
      let result = num2[y] * num1[i] + add
      // 进位
      add = Math.floor(result / 10)
      ans.unshift(result % 10)
    }
    if (add != 0) {
      ans.unshift(add)
      add = 0
    }
    box.unshift(ans.join('') * baserate)
    ans = []
    y--
    baserate = baserate * 10
  }
  sum = box.reduce((pre, next) => {
    return pre + next
  })
  sum = sum * rate
  return sum.toString()
};
console.log(multiply('1000', '875'));