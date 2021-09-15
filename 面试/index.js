// 一个数组prices
// prices[i]是给定股票第i天的价格
// 考虑栈
// [7,1,5,3,6,4]
// 滑动窗口
// 前后指针
// 窗口滑动，将每次最大的值放入栈
function price(prices) {
  let len = prices.length
  let stack = []
  let pre = prices[0]
  stack.push(pre)
  for (let i = 0; i < len; i++){
    let pre = prices[i]
  }

}
nums = [7, 1, 5, 3, 6, 4]
console.log(price(nums));