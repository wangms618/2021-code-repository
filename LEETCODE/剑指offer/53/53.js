
// 双指针
var search = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (nums[l] < target) l++
  while (nums[r] > target) r--
  return r - l >= 0 ? r - l + 1 : 0
};