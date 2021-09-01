// 希尔排序
function shellSort(arr) {
  var len = arr.length,
    temp,
    gap = 1;
  console.log(len);
  console.time('希尔排序耗时:');
  while (gap < len / 4) { //动态定义间隔序列
    gap = gap * 4 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 4 )) {
    for (var i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  console.timeEnd('希尔排序耗时:');
  return arr;
}





let arr = [5, 2, 5, 4, 1, 6, 4, 9, 10]

console.log(shellSort(arr));