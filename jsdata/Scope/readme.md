# 作用域 Scope
- 作用域是指在程序中定义变量的区域，该位置决定了变量的生命周期（和函数作用域、块级作用域相关）。通俗的理解，作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期。

## 理解作用域


## 全局作用域 
  window

  如何跨页面引用到变量？
## 函数作用域 function () {}
## 块级作用域 JS c c++ {}

通过var 和 let 来研究作用域  let可以声明块级作用域



第二节课
1. 全局污染  
引入立即执行函数（自执行函数）
```js
var a = 2
(function() {
  var a = 3
})
console.log(a);//2
```

块级作用域
bug
var 定义全局变量
```js
let arr = []

for (var i = 0; i < 10; i++){
  arr[i] = function () {
    console.log(i);
  }
}

for (let item of arr) {
  item()
}//十个10
```
```js
let arr = []

for (let i = 0; i < 10; i++){
  arr[i] = function () {
    console.log(i);
  }
}

for (let item of arr) {
  item()
}//0到9
// 第一次for循环，定义i
// 第二次for循环，又定义了i(开辟第二个空间),但JS执行引擎不允许两个相同的变量出现，但有同名变量i，会覆盖
```


# 《初识闭包》
# 闭包  
什么叫闭包
闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁

当一个函数**被保存到外部时**，将产生闭包  
## 闭包的缺陷
闭包会导致作用域链不释放，造成内存泄漏
应需内存不够用
一个代码写了很多的闭包，很多空间不能释放，浏览器要占用更多的资源
## 作用
1. 实现共有变量 add.js
2. 做缓存 cache.js
3. 实现封装，属性私有化
4. 模块开发，防止污染全局变量





实验代码
```js
function foo() {
  var a = 2;
  
  function baz() {
    console.log(a);
  }

  bar(baz)//bar在foo调用所以能
}
foo()
function bar(fn) {
  fn()
  //baz在bar里调用
}
```
```js
function test() {
  var arr = []
  for (var i = 0; i < 10; i++) {
    (function(j) {
      arr[j] = function() {
        console.log(j);
      }
    })(i)
  }
  return arr
}

var myArr = test()



for (var j = 0; j < 10; j++) {
  myArr[j]()
}

```
每一次保留下来一个  
回收机制  
每次自执行结束后，  
回收机制会来问，兄弟你执行完了不。  
自执行函数说 不，还有人在引用我，