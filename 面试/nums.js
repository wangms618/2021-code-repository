// 总金额固定，根据物品单价，选择出符合条件的最少商品数量
// 如果要选出最少商品数量，首先肯定是选出最贵的加入
// 先是持续放入最贵的，如果超出，回退回上一次，然后选出第二贵的加入，以此类推
// 如果满足则返回最少商品数量
// 如果循环结束依旧不满足，返回-1
function lowNums(nums, m) {
  let res = 0
  let prices = 0
  let len = nums.length - 1
  // 从大到小排序
  nums.sort((a, b) => a - b)
  // 递归回溯,参数为当前数组的最大值
  function dfs(n) {
    prices = n + prices
    // 如果总价格prices大于规定价格，回溯
    if (prices > m) {
      prices = prices - n
      return -1
    } else if (prices == m) { // 如果prices等于价格，说明当前就是最小数目
      res++
      return 1
    } else { // 如果小于
      res++
      return 2
    }


  }
  // 遍历所有数字
  while (len >= 0) {
    let flag = dfs(nums[len])
    if (flag == -1) {
      len--
      continue
    } else if (flag == 2) {
      continue
    } else if (flag == 1) {
      break
    }
  }
  return res !== 0 ? res : -1
}

let nums = [1, 2, 10]
let m = 11
console.log(lowNums(nums, m));