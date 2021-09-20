var permute = function (nums) {
  let len = nums.length
  let res = []
  let stack = []
  let visit = {}

  function dfs(nth) {
    if (nth == len) {
      // slice 方法的作用是帮助我们拷贝出一个不影响curr正本的副本，以防直接修改到curr的引用。
      res.push(stack.slice())
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