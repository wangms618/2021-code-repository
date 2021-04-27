// function foo(a) {
//   var b = 2;
//   console.log(b);
//   console.log(a);
//   function bar() {
//     var c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   bar()
// }
// foo(1)

// function doSomething(a) {
//   b = a + doSomethingElse(a * 2);
//   console.log(b * 3);
// }
// function doSomethingElse(a) {
//   return a - 1;
// }
// var b;
// doSomething(2);//15

// function doSomething(a) {
//   function doSomethingElse(a) {
//     return a - 1;
//   }
//   var b;
//   b = a + doSomethingElse(a * 2);
//   console.log(b * 3);
// }
// doSomething(2);//15

// function foo() {
//   function bar(a) {
//     i = 3;//声明一个本地变量(var i = 3;)，即修改了for循环所属作用域中的i
//     console.log(a + i);
//   }
//   for (var i = 0; i < 10; i++){
//     bar(i * 2);//无限循环
//   }
// }
// foo();
{
  let i = 1;
}
console.log(i);//i is not defined