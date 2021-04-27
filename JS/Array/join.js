// 参数为要使用的分隔符
var arr = Array(3);
arr[0]="G";
arr[1]="M";
arr[2]="K";
console.log(arr.join(""));//默认为分隔符为","  
console.log(arr.join("。。。"));//参数要在""里面写，分隔符为。。。
console.log(arr.join("    "));//可以判断空格