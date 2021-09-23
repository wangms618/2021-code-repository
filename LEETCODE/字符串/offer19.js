// 剑指 Offer II 019. 最多删除一个字符得到回文
var validPalindrome = function (s) {
  let len = s.length
  // 左指针
  let left = 0
  // 右指针
  let right = len - 1
  while (left <= right) {
    // 如果左右指针相等，移动
    left++
    right--
  }
  if (test(left + 1, right)) {
    return true
  }
  if (test(left, right--)) {
    return true
  }

  function test(st, sd) {
    while (st <= sd) {
      if (s[st] !== s[sd]) {
        return false
      }
      st++
      sd--
    }
    return true
  }
  return false
};

let str = 'acbcaca'
console.log(validPalindrome(str));