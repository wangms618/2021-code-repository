arr = [3, 5, 1, 2, 4]

function insert(arr) {
  let len = arr.length
  let temp
  for (let i = 1; i < len; i++) {
    let j = i;
    temp = arr[i]
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1] //将前一项放入后一项，以便将前一项的位置让出
      j--
    }
    // 这里前面j--了，所以arr[j]其实是之前空出的位置
    arr[j] = temp
  }
  return arr
}
console.log(insert(arr));