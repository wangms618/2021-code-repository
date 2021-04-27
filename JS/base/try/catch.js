// 异常捕获
// try {
//   发生异常的代码块
// } catch (err) {
//   错误信息处理；
// }
function demo() {
  // console.log(str);
  try {
    console.log(str);
  } catch (err) {
    console.log(err)
  }
}
demo();