// 冒泡排序
// 从第一个元素开始，重复比较相邻的两项，若第一项比第二项大，则交换位置，反之
let arr = [5, 3, 2, 4, 1]
function bubbleSort(arr) {
  let len = arr.length - 1
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    len--
  }
  console.log(arr);
}
bubbleSort(arr)