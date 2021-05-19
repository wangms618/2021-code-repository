// var a = {
//   user: '王杰',
//   fn: function (x, y, z) {
//     console.log(this.user);
//     console.log(x + y + z);
//   }
// }
// var b = a.fn
// b.call(a, 1, 2, 3)


// var a = {
//   user: '王杰',
//   fn: function (x, y, z) {
//     console.log(this.user);
//     console.log(x + y + z);
//   }
// }
// var b = a.fn
// b.apply(a, [1, 2, 3])

var a = {
  user: '王杰',
  fn: function (x, y, z) {
    console.log(this.user);
    console.log(x + y + z);
  }
}
var b = a.fn
// var c = b.bind(a, 1, 2, 3)
var c = b.bind(a)
c(1, 2, 3)
