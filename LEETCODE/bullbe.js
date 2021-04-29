// 冒泡排序（未优化）
const bubbleSort = arr => {
  console.time('改进前冒泡排序耗时');
  const length = arr.length;
  if (length <= 1) return;
  for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          }
      }
  }
  console.log('改进前 arr :', arr);
  console.timeEnd('改进前冒泡排序耗时');
};

const arr = [7, 8, 4, 5, 6, 3, 2, 1];
bubbleSort(arr);

const bubbleSort2 = arr => {
  console.time('改进后冒泡排序耗时');
  const length = arr.length;
  if (length <= 1) return;
  for (let i = 0; i < length - 1; i++) {
      let hasChange = false; // 提前退出冒泡循环的标志位
      for (let j = 0; j < length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
              hasChange = true; // 表示有数据交换
          }
      }

      if (!hasChange) break; // 如果 false 说明所有元素已经到位，没有数据交换，提前退出
  }
  console.log('改进后 arr :', arr);
  console.timeEnd('改进后冒泡排序耗时');
};

const arr2 = [7, 8, 4, 5, 6, 3, 2, 1];
bubbleSort2(arr2);