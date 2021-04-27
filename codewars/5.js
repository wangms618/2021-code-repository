// 有一个带有一些数字的数组。除了一处是不同的数字，其余所有数字都是相等的。试着找到它！
// 保证数组至少包含3个数字。
// 测试包含一些非常庞大的数组，所以请考虑性能。

// 第一次执行成功
function findUniq(arr) {
  if(arr.length<3)
    {
      return 0
    }
  else {
    //获取数组第一个数的值，为初始值
    var nums = arr[0]
    // 从数组第二个值开始遍历
    for (var i = 1; i < arr.length; i++){
      // 如果初始值和遍历的值不等
      if (nums != arr[i])
      {
        // 先判断数组是否遍历到最后一位，如果是则证明数组最后一位是不同的数字,返回arr[i]
        if (i + 1 == arr.length)
        {
          return arr[i]
        }
        // 数组没有遍历到尾部
        else {
          // 将初始值与它不相等数的下一位进行对比，如果不相等，证明初始值就是不同的数字，返回初始值
          if (nums != arr[i + 1]) {
            return nums
          }
          // 如果相等，则证明遍历到的数值是不同的数字，返回arr[i]
          else
            return arr[i]
        }
        }
      else
        // 相等执行下一轮循环
        continue      
    }
  }
}
// 另外一种想法是，如果执行第一次和第二次发现值相等，则只需要循环值不同的值，就可以判断那个值就是不同的数字