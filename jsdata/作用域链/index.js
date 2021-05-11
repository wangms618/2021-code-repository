function test() {

}
// 函数原型
// test.prototype
// 隐式属性
// test.[[scope]]

// test() -->AO:{} // 回收 AO对象被回收
// function a() {
//   function b() {
//     var b = 222
//   }
//   var a = 111
//   b()
//   console.log(a);
// }
// var glob = 100
// a()


function a() {
  function b() {
    function c() {
      
    }
    c()
  }
  b()
}
a()
// 1. a 定义 a.[[scope]] ---> 0: GO{}
// 2. a 执行 a.[[scope]] ---> 0: aAO{} 1:GO{}
// 3. b 定义 b.[[scope]] ---> 0:aAO{} 1:GO{}
// 4. b 执行 b.[[scope]] ---> 0:bAO{} 1:aAO{} 2:GO{}
// 5. c 定义 c.[[scope]] ---> 0:bAO{} 1:aAO{} 2:GO{}
// 4. c 执行 c.[[scope]] ---> 0:cAO{} 1:bAO{} 2:aAO{} 3:GO{}
// 作用域链