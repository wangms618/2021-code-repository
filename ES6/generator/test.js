// function* test() {
//   console.log(1);
//   console.log(2);
// }
// var it = test()
// it.next() // 1 2

function* test() {
  console.log(1);
  console.log(2);
  yield console.log(3);
  console.log(4);
}
var it = test()
it.next() // 1 2 3 
it.next() // 4