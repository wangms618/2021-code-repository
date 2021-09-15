// 两个数列
function fourNums(str) {
  let nums = str.split(';')
  console.log(nums);
  let nums1 = nums[0].split(',')
  let nums2 = nums[1].split(',')
  if (nums2[0] == '') return nums1[3]
  if (nums1[0] == '') return nums2[3]
  let len1 = nums1.length
  let len2 = nums2.length
}

let arr = '1,2,3,4,5;'
fourNums(arr)