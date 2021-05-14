// 数字根是一个数字中所有数字的递归和。
// 给出n的数字之和。n。如果该值有多个数字，则继续以这种方式减少，直到产生一个单位数字为止。输入将是一个非负整数.
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
// 解
// 先将数值拆开
function digital_root(n) {
  num = n.toString()
  let nums = 0;
  for (let i = 0; i < num.length; i++) {
    nums += Number(num[i])
  }
  if (nums < 10) {
    return nums
  } else {
    return digital_root(nums)
  }
}
console.log(digital_root(66));