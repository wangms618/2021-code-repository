# 箭头函数
1. 箭头函数内的this对象，就是定义时所在的对象，而不是使用时所在的对象
2. 箭头函数不可以当做构造函数，也就是不能被new
3. 不可以使用arguments对象，可以用rest
```js
// rest
function add(...values) {
  let sum = 0
  for (let val of values) {  // val 遍历数组没一项
    sum += val
  }
  return sum
}
console.log(add(1,2,3,4,5,6)) //21
```