let arr = ['a', 'b', 'c', 'd']
// for (let item of arr) {
//   // console.log(item); //abcd
//   item=item+1
// }
// console.log(arr); // [ 'a', 'b', 'c', 'd' ]



// arr.forEach((item,index) => {
//   item = item+1
// })
// console.log(arr); // [ 'a', 'b', 'c', 'd' ]


// arr.map((item,index) => {
//   return item + 1
// })
// console.log(arr);// [ 'a', 'b', 'c', 'd' ]


// map会返回一个新数组
// let newArr = arr.map((item,index) => {
//   return item + 1
// })
// console.log(newArr);//[ 'a1', 'b1', 'c1', 'd1' ]


const obj = {
  a: 1,
  b: 2,
  c: 3
}
console.log(Object.keys(obj));