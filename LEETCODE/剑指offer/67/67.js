// const reg = /\s*([-\+]?[0-9]*).*/
// str = '42'
// const group = str.match(reg)
// console.log(group);

var strToInt = function(str) {
  const reg = /\s*([-\+]?[0-9]*).*/
  const max = Math.pow(2,31) - 1
  const min = -max - 1
  const groups = str.match(reg)
  let targetNum = 0;
  if(groups){
      // groups[1]是匹配的值，下标0是检查的值
      // groups结构:
      // [ '42', '42', index: 0, input: '42', groups: undefined ]
       targetNum = +groups[1]
       if(isNaN(targetNum)) {
          // 不能进行有效的转换时，请返回 0
          targetNum = 0
      }
  }
  if(targetNum>max) return max
  if(targetNum<min) return min
  return targetNum
};