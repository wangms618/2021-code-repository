var reverseWords = function (s) {
  // 左标
  let left = 0
  // 右标
  let right = s.length - 1
  let queue = []
  let word = ''
  // 去除空格
  while (s.charAt(left) === ' ') left++
  while (s.charAt(right) === ' ') right--
  while (left <= right) {
    let char = s.charAt(left)
    if (char === ' ' && word) { // 如果遇到空格，说明word已经存储了一个单词，将其放入栈顶，初始化word
      queue.unshift(word)
      word = ''
    } else if (char !== ' ') { // 如果是单个字母，则连接起来
      word += char
    }
    left++ //数组下一位
  }
  queue.unshift(word) // 将最后一个单词放入栈中
  return queue.join(' ') // 将数组转换为字符串
};