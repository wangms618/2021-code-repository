var arr = Array(5);
arr[0]="G";
arr[1]="E";
arr[2]="N";
arr[3]="S";
arr[4]="K";
console.log(arr);
console.log(arr.slice(1));//返回指定的元素
console.log(arr);//不会修改数组
console.log(arr.slice(-1));//-1指最后一个元素
console.log(arr.slice(-3));//-3指倒数第三个元素
console.log(arr.slice(2,4));//第二个参数决定从何处结束选取，该参数是数组片段结束处的数组下标,且不会取结束处的元素，即不取arr[4]
console.log(arr.slice(-4,-1));//从倒数第四个到倒数第二个，因为结束处的元素不取，所以没有取倒数第一个
