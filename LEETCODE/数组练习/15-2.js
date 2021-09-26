// 三数求和，怎么做

var threeSum = function (nums) {
  let len = nums.length
  let res = []
  nums.sort((a, b) => a - b)
  // 第一个数字只能到达倒数第三个位置
  for (let i = 0; i < len - 2; i++) {
    // 第二个数字，也就是头指针，记住下标
    let two = i + 1
    // 第三个数字，就是尾指针
    let thr = len - 1
    // 排除开头重复
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    // 开始检测三个数字之和是否为0
    while (two < thr) {
      let tem = nums[i] + nums[two] + nums[thr]
      if (tem === 0) {
        res.push([nums[i], nums[two], nums[thr]])
        // 排除指针重复
        while (two < thr && nums[two] == nums[two + 1]) {
          two++
        }
        while (two < thr && nums[thr] == nums[thr - 1]) {
          thr--
        }
        // 固定移动左指针
        two++
      } else if (tem > 0) {
        thr--
      } else {
        two++
      }
    }
  }
  return res
};
let num = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(num));