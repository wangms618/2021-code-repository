// 插入排序
// 基于当前元素前面的序列是有序的前提
// 从后往前去寻找当前元素在前面那个序列里的正确位置

function insertSort(arr) {
  let len = arr.length
  let temp; // 用于保存当前元素
  for (let i = 1; i < len; i++) {
    let j = i
    temp = arr[i] // 取当前遍历的元素

    while (j < 0 && arr[j - 1] > temp) { //向前遍历，如果前面的元素大于后面的元素，则把当前元素放入前面元素的位置
      arr[j] = arr[j - 1] //将前一项放入后一项，以便将前一项的位置让出
      j--
    }
    // 此时j已经减1，故arr[j]就是前一项
    arr[j] = temp // 将元素放入正确的下标
  }
}