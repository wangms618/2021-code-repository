// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
//  
// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

let strs = ["flower", "flow", "flzz"]
var longestCommonPrefix = function (strs) {
  let str = strs[0]
  let index = 0
  while (index < str.length) {
    const strCur = str.slice(0, index + 1)
    for (let i = 0; i < strs.length; i++)
      if (!strs[i] || !strs[i].startsWith(strCur)) {
        return str.slice(0, index)
      }
    index++
  }
  return str
};

console.log(longestCommonPrefix(strs));