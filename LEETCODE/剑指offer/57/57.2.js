// 1，滑动窗口解决
// 滑动窗口，这里也叫双指针，因为题中要求的是正整数，连续的，并且至少含有两个数。
// 所以我们使用两个指针，一个left指向1，一个right指向2，他们分别表示窗口的左边界和右边界。然后计算窗口内元素的和。
// 如果窗口内的值大于target，说明窗口大了，left往右移一步。
// 如果窗口内的值小于target，说明窗口小了，right往右移一步。
// 如果窗口内的值等于target，说明找到了一组满足条件的序列，把它加入到列表中

var findContinuousSequence = function (target) {
  let arr = [] //存放数组
  let left = 1
  let right = 2
  let sum = 0
  while (left < right) {
    for (let i = left; i <= right; i++) {
      sum += i
    }
    if (sum > target) {
      left++
      sum = 0
    } else if (sum < target) {
      right++
      sum = 0
    } else {
      let arr2 = []
      for (let j = left; j <= right; j++)
        arr2.push(j)
      arr.push(arr2)
      left++ // 一定要移动
      sum = 0
    }
  }
  return arr
};
console.log(findContinuousSequence(15))