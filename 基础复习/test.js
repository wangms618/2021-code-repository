var x = 10
function fn() {
  console.log(x)
}
function show(f) {
  var x = 20
  fn()
}
show(fn)