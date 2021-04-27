// 编写一个接受大括号字符串的函数，并确定大括号的顺序是否有效。如果字符串有效，它应该返回true如果字符串无效，它应该返回false。
// 这个卡塔类似于有效括号卡塔，但是引入了新的字符:括号[]，花括号{}。感谢@arnedag的创意！
// 所有输入字符串都是非空的，并且仅由括号、括号和大括号组成:()[]{}。
// 什么被视为有效？
// 如果所有大括号都与正确的大括号匹配，则大括号字符串被视为有效。
/*
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
const leftToRight = {//map结构
  "(": ")",
  "{": "}",
  "[": "]"
}
function validBraces(braces) {
  var stack = [];
  var len = braces.length;
  for (var i = 0; i < len; i++){
    if (braces[i] === "[" || braces[i] === "{" || braces[i] === "(")
    {
      stack.push(leftToRight[braces[i]])
    }
    else
    {
      if (!stack.length || stack.pop() != braces[i])
        return false
    }
  }
  return !stack.length //防止没有取空
}
var s = '([]})'
console.log(validBraces(s))