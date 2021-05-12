// function test() {
//   var arr = []
//   for (var i = 0; i < 10; i++) {
//     (function(j) {
//       arr[j] = function() {
//         console.log(j);
//       }
//     })(i)
//   }
//   return arr
// }

// var myArr = test()



// for (var j = 0; j < 10; j++) {
//   myArr[j]()
// }


function foo() {
  var a = 2
  function bar() {
    console.log(a);
  }
  return bar
}
var baz = foo()
baz() // 2 这就是闭包的效果
