var permute = function (nums) {
  let len = nums.length
  let res = []
  let stack = []
  let visit = {}

  function dfs(nth) {
    if (nth == len) {
      console.log(stack);
      res.push([...stack])
      return
    }
    for (let i = 0; i < len; i++) {
      if (!visit[nums[i]]) {
        visit[nums[i]] = 1
        stack.push(nums[i])
        dfs(nth + 1)
        stack.pop()
        visit[nums[i]] = 0
      }
    }
  }
  dfs(0)
  return res
};
let arr = [1, 2, 3]
permute(arr)