// 选定Pivot中心轴
// 将大于Pivot的数字放在Pivot的右边
// 将小于Pivot的数字放在Pivot的左边
// 分别对左右子序列重复前三步操作

let arr = [7, 5, 7, 3, 9, 1, 55, 11, 66]

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left > right) return
  let L = left
  let R = right
  let pivot = arr[L]
  while (L < R) {
    while (arr[R] >= pivot && L < R) {
      R--
    }
    if (L < R) {
      arr[L] = arr[R]
    }
    while (arr[L] <= pivot && L < R) {
      L++
    }
    if (L < R) {
      arr[R] = arr[L]
    }
    if (left >= right) {
      arr[L] = pivot
    }
  }
  quicksort(arr, left, R - 1)
  quicksort(arr, R + 1, right)
  console.log(left,R);
  return arr
}

arr = quicksort(arr)
console.log(arr);