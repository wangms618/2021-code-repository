// 选择排序
// 循环遍历数组，每次都找出当前范围内的最小值，把它放在当前范围的头部
// 然后缩小排序范围，继续重复以上操作，直到数组有序
let arr = [2, 3, 5, 1, 4]
// 0 ~ n-1
// 循环，求最小值放到首位
// 1~ n-1 
// ···
// n~n-1
function selectSort(arr) {
  let len = arr.length - 1
  for (let i = 0; i < len; i++) {
    let n = 0
    let m = 1
    for (m; m < len + 1; m++) {
      console.log(m);
      if (arr[m] < arr[n]) {
        [arr[n], arr[m]] = [arr[m], arr[n]]
      }
      n++
    }
    m++
  }
  console.log(arr);
}
selectSort(arr)