// arrayObject.concat(arrayX,......,arrayX)arrayX可以是具体的值，也可以是数组对象。可以是任意多个。

//将参数连接到数组a中
/*var a=[1,2,3];
console.log(a.concat(4,5,6,7,8));*/

// 连接两个数组
var arr = new Array(3);
arr[0]="Lebron";
arr[1]="John";
arr[2]="Kobe";
//console.log(arr);
var arr2 = new Array(3);
arr2[0]="James";
arr2[1]="Wall";
arr2[2]="Bryant";
//console.log(arr2);
console.log(arr.concat(arr2));

//连接三个数组
var arr3 = new Array(2);
arr3[0]="MJ";
arr3[1]="MG";
console.log(arr.concat(arr2,arr3));
