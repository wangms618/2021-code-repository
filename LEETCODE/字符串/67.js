/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let ans = []
  let add = 0
  while (i >= 0 || j >= 0) {
    const x = i >= 0 ? a[i] - '0' : 0
    const y = j >= 0 ? b[j] - '0' : 0
    let result = x + y + add
    i--
    j--
    if (result == 0 || result == 1) {
      ans.unshift(result)
      add = 0
    } else if (result == 2) {
      add = 1
      ans.unshift('0')
    } else {
      add = 1
      ans.unshift('1')
    }
    if (add == 1 && i < 0 && j < 0) {
      ans.unshift('1')
    }
  }
  return ans.join('')
};

console.log(addBinary('1110', '1'));