var maxSlidingWindow = function(nums, k) {
  let len = nums.length
  let res = []
  let deque = []
  for(let i = 0;i<len;i++){
      // 如果队列尾部的值小于当前值，则弹出队列尾部的值
      while(deque.length && deque[deque.length-1]<nums[i]){
          deque.pop()
      }
      deque.push(nums[i])
      while(deque.length && deque.length>k){
          deque.shift()
      }
      if(i>=k-1){
          res.push(deque[0])
      }

  }
  return res
};