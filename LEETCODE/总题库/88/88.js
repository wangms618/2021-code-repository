// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
// 比较两个数组最后一位的大小，放入nums1最后一位，继续比较最后一位
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1
  let len2 = n - 1
  let len = m + n - 1
  while (len2 >= 0) {
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
    // if (nums1[len1] > nums2[len2]) {
    //   nums1[len--] = nums1[len1--]
    // } else {
    //   nums1[len--] = nums2[len2--]
    // }
  }
  return nums1
};
merge([6, 7, 8, 0, 0, 0], 3, [3, 7, 9], 3)
