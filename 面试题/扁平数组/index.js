let ary = [1, 2, [3, [4, 5]], 6]
// 1
// console.log(ary);
// while () {
//   ary = [].concat(...ary)
//   console.log(ary);
// }
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary)
}
console.log(ary);
