function a() {
  function b() {
    var bbb = 234
    console.log(aaa);
  }
  var aaa = 123
  return b
}
var glob = 100
var demo = a()
demo()

// GO: {
//   glob: undefined 100,
//   demo: undefined function b() { },
//   a:function() {}
// }
// aAO: {
//   aaa: undefined 123,
//   b:function(){}
// }
// bAO: {
//   bbb:undefined 234
// }