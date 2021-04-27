var arr = new Array(3);
arr[0] = "George";
arr[1] = "John";
arr[2] = "Thomas";
console.log(arr.toLocaleString());//把数组转换为本地字符串。首先调用每个数组元素的 toLocaleString() 方法，然后使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。