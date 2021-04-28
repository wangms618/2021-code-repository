// 不借助外部变量
// 如何保留住函数内部的某个变量
function add() {
  var num = 0;
  function a() {
    num++
    console.log(num);
  }
  return a
    
}
var result = add()
result()
result()
result()
// 自始至终都无法回收add()