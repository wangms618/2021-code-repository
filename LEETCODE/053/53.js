// 子数组从长度1开始遍历数组，求出每个数组和的最大值，直到长度最大
// var maxSubArray = function (nums) {
//   var max1 = nums[0];
//   var max = nums[0];
//   let len = nums.length;
//   let num = 0;
//   // 子数组长度
//   for (let i = 0; i < len; i++){
//     for (let j = i; j < len; j++){
//       num += nums[j]
//       if (num > max) {
//         max = num
//       }
//     }
//     if (max>max1) {
//       max1 = max;
//     }
//     num = 0;
//   }
//   return max1
// };

// dp(n) = nums[n]+max(dp[n-1],0)
var maxSubArray = function (nums) {
  if (nums.length == 0) {
    return 0
  }
  let dp = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    dp.push(nums[i] + Math.max(dp[i - 1], 0))
  }
  return Math.max(...dp)
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));