// 选择排序，每次将最小的值放到最前面
arr = [1, 2, 3, 4, 5]
function select(arr) {
  let len = arr.length - 1
  let minIndex
  for (let i = 0; i < len; i++){
    minIndex = i
    for (let j = i; j < len; j++){
      // 找到当前区间最小元素下标
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if(minIndex!==i)
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
  }
  return arr
}
console.log(select(arr));