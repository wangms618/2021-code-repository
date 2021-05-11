var tmp = 123;
if (true) {
  tmp = 'abc';
  // console.log(tmp); // abc
}

var tmp = 123;
if (true) {
  tmp = 'abc';
  let tmp;
}
// ReferenceError

// 块级作用域内，在不使用let声明变量tmp前，tmp = 'abc' 会修改全局变量tmp的值
// 在块级作用域里用let又声明了一个局部变量tmp,导致tmp绑定到这个块级作用域，所以在let声明变量前，对tmp赋值会报错