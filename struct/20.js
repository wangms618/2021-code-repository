const leftToRight = {//map结构
  "(": ")",
  "{": "}",
  "[": "]"
}

var isValid = function (s) {
  if (!s) {
    return true
  }
  // 初始化一个stack栈
  const stack = []
  const len = s.length
  // 只要是左括号都丢入栈，碰到右括号去栈顶里取值匹配，如果相同出栈
  for (var i = 0; i < len; i++){
    const ch = s[i]
    if (ch === "(" || ch === "{" || ch === "[")
    {
      stack.push(leftToRight[ch])
    }
    else
    {
      if (!stack.length || stack.pop() != ch)
        return false
    }
  }
  return !stack.length //防止没有取空
};
var s = '()'
console.log(isValid(s)) 