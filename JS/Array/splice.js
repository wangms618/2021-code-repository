var arr = new Array(5);
arr[0]="Lebron";
arr[1]="John";
arr[2]="Kobe";
arr[3]="Thomas";
arr[4]="George";
arr.splice(2,0,"William");//添加一个元素
console.log(arr);

var arr2 = new Array(5);
arr2[0]="Lebron";
arr2[1]="John";
arr2[2]="Kobe";
arr2[3]="Thomas";
arr2[4]="George";
arr2.splice(2,1,"William");//删除位于index 2的元素，并添加一个新元素来替代
console.log(arr2);

var arr3 = new Array(5);
arr3[0]="Lebron";
arr3[1]="John";
arr3[2]="Kobe";
arr3[3]="Thomas";
arr3[4]="George";
arr3.splice(2,3,"William");
console.log(arr3);//删除从index2开始的三个元素并代替
console.log(arr3.length);//长度也改变