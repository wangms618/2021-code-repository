/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  回溯
var permute = function (nums) {
  // 先取数组长度
  let len = nums.length
  // 保存结果
  let res = []
  // 保存每次遍历的排列
  let curr = []
  // 用对象存储已经走过的数字
  let visit = {}

  function dfs(nth) {
    if (nth === len) {
      res.push([...curr])
      return
    }
    for (let i = 0; i < len; i++) {
      // 如果对象里有对应的数字，则证明该数字已经在curr中
      if (!visit[nums[i]]) { // curr中没有该数字
        // 将目前遍历到的数字在visit做记录
        visit[nums[i]] = 1
        // 将数字放入curr
        curr.push(nums[i])
        // 递归，放第二个数字
        dfs(nth + 1)
        // 递归回来时弹出
        curr.pop()
        // 将记录清空
        visit[nums[i]] = 0
      }
    }
  }
  dfs(0)
  return res
};
let num = [1, 2, 3]
console.log(permute(num));