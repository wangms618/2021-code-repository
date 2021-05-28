let arr = [2, 3, 5, 1, 4]
function selectSort(arr) {
  let len = arr.length - 1
  let minIndex;
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i; j < len + 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

console.log(selectSort(arr));