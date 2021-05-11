function cool(id) {
  function identify() {
    console.log(id);
  }
  return {
    a: identify
  };
}
var foo1 = cool("foo 1");
var foo2 = cool("foo 2");
foo1.a() //foo 1
foo2.a() //foo 2