# 柯里化
将使用多个参数的函数转换成一系列使用的一个参数的函数
```
function add(a, b) {
  return a+b
}
add(1, 2)

var addCurry = curry(add)
addCurry(1)(2)
```

# 用途
参数复用,本质上是降低了通用性，提高了适用性