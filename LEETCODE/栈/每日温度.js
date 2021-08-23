//  存索引
var dailyTemperatures = function(temperatures) {
  let stack = []
  let len = temperatures.length
  let res = (new Array(len)).fill(0)
  temperatures.forEach((item,index)=>{
      // 如果成立，说明stack栈顶元素对应的温度找到了离他最近的比他高的温度
      while(stack.length && item > temperatures[stack[stack.length-1]]) {
      // 将栈顶温度值对应的索引出栈，因为找到后就不用再与后面的温度进行匹配
      // 直接弹出，与当前温度下标相减，再存入对应下标的位置
      const top = stack.pop()  
      // 计算当前栈顶温度值与第一个高于它的温度值 的索引差值
      res[top] = index - top 
    }
      stack.push(index)
  })
  return res
};