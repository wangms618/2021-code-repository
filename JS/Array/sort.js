var arr = new Array(5);
arr[0]="Lebron";
arr[1]="John";
arr[2]="Kobe";
arr[3]="Thomas";
arr[4]="George";
console.log(arr);
console.log(arr.sort());

var arr2 = new Array(5);
arr2[0]="10";
arr2[1]="333";
arr2[2]="2222";
arr2[3]="55555";
arr2[4]="44";
console.log(arr2);
console.log(arr2.sort());//不使用参数时，按照字母顺序对数组进行排序，即字符编码的顺序排序，有点类似于首字母排序

function sortNumber(a,b){
    return a - b;
}
console.log(arr2.sort(sortNumber));//使用一个排序函数