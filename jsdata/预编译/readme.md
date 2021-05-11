# 预编译 发生在函数执行之前 四部曲 （在函数中）
1. 检查有没有作用域 创建AO对象(activation object)
2. 找形参和变量声明，将形参和变量声明作为AO对象的属性名，值为undefined
3. 将实参和形参统一
4. 在函数体里找函数声明，将函数名作为AO对象的属性名，值赋予函数体



# 预编译也发生在全局，三部曲
1. 创建GO对象
2. 找变量声明，将变量声明作为GO对象的属性名，值赋予undefined
3. 找全局里的函数声明，将函数名作为GO对象的属性名，值赋予函数体

```js
function test(a, b) {
      console.log(a);
      c = 0;
      var c;
      a = 3;
      b = 2;
      console.log(b);
      function b() {}
      function d() {}
      console.log(b);
    }
```

AO:{
  a:undefined 1 3
  b:undefined function(){} 2
  c:undefined 0 
  d:function(){}
}
1 2 2


a un 1  输出1   3
b un fun  b=2  输出b
c un 
d fun
答案
1   2  2