// 冒泡排序
// 从第一个元素开始，重复比较相邻的两项，若第一项比第二项大，则交换位置，反之
let arr = [7, 1, 5, 8, 0, 6, 6, 5, 1, 1, 5, 3, 2, 4, 1]
function bubbleSort(arr) {
  let len = arr.length - 1
  for (let i = 0; i < arr.length - 1; i++) {
    let flag = false
    for (let j = 0; j < len - i; j++) {
      if (arr[j + 1] < arr[j]) {
        // let temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp
        // 解构赋值语法
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        // 只要发生一次交换，flag为true
        flag = true
      }
    }
    if (flag == false) {
      break;
    }
  }
  console.log(arr);
}
bubbleSort(arr)