/**
 * @param {number[]} nums
 * @return {number}
 */
// 定义一个变量，一个最大值
// 遍历数组，如果数字为1，变量增加，如果为0，变量归零，判断变量与最大值的大小，得到当前最大连续
var findMaxConsecutiveOnes = function(nums) {
  var n = 0;
  var max = 0;
  for(let i = 0;i<nums.length;i++){
      if(nums[i] == 1)
      {
          n++;
          if(max<n)
          {
              max = n;
          }
      }
      else {
          n=0;
      }
  }
  return max
}