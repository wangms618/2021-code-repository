function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
}
// foo() // undefined 
foo.call(obj)  // 2
obj.foo()
