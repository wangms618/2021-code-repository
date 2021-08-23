/**
 * @param { string } num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  // 进位
  let add = 0
  let ans = []
  while (i >= 0 || j >= 0) {
    const x = i >= 0 ? num1[i] - '0' : 0;
    const y = j >= 0 ? num2[j] - '0' : 0;
    let result = x + y + add
    ans.unshift(result % 10)
    add = Math.floor(result / 10)
    i--;
    j--;
    // 解决1+9，1+99这种刚好进位的情况
    if (add != 0 && j < 0 && i < 0) {
      ans.unshift('1')
    }
  }
  return ans.join('')
};