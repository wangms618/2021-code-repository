// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。
// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
// 连续正整数序列
// 思路，
// 枚举每个正整数为起点，判断以它为起点的序列和是否等于target即可，由于题目要求序列长度至少大于2，所以枚举的上界为target/2
var findContinuousSequence = function (target) {
  let arr = [] //存放数组
  let num = target / 2 //边界
  let sum = 0
  for (let i = 1; i < num; i++) { //左边界不能超出target的一半
    for (let j = i; j < num + 1; j++) { // 右边界不能超出target一半加1
      sum += j //循环相加连续正整数
      if (sum > target) { // 大于target说明这个边界条件不符合，进入下一个边界条件
        sum = 0 //初始化
        break
      } else if (sum == target) { // 边界符合
        let arr2 = []
        for (let m = i; m <= j; m++) {
          arr2.push(m) // 将边界的每一个数字压入队列
        }
        arr.push(arr2) // 将队列压入存放数组
        sum = 0 // 初始化
        break // 下一轮循环
      }
    }
  }
  return arr
};
console.log(findContinuousSequence(17))
