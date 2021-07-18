/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//  双指针加移动窗口
var maxSlidingWindow = function(nums, k) {
  let res = []
  let stack = []
  let len = nums.length
  for(let i = 0 ; i<len;i++){
      while(stack.length && stack[stack[length-1]]<nums[i]){
          stack.pop()
      }
      stack.push(i)
      while(stack.length&&stack[0]<=i-k){
          stack.shift()
      }
      if (i >= k - 1) {
      res.push(nums[stack[0]]);
  }
  }
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
  const len = nums.length;
  const res = []
  const deque = []
  for (let i = 0; i < len; i++){
      while(deque.length && nums[deque[deque.length - 1]] < nums[i]){
          deque.pop()
      }
      deque.push(i)
      while(deque.length && deque[0]<=i-k){
          deque.shift()
      }
      if(i>=k-1){
          res.push(nums[deque[0]]);
      }
  }
  return res
};