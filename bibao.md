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


# 闭包
形成闭包的变量会到堆中

# 闭包

“闭包”是这门语言非常重要却又难以掌握的。  

闭包是是基于词法作用域书写代码时所产生的自然结果

当函数可以**记住**并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。

引擎有垃圾回收器用来释放不再使用的内存空间。闭包可以阻止这件事情的发生，内部作用域没有被回收

无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包