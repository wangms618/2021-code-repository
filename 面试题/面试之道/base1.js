// 1. 对象类型和原始类型的不同之处?
// 对象存于栈中，对象存于堆中，对象地址存在于栈中

// 2. 函数的参数是对象会发生什么？
// 但是，如果函数的输入是对象(Array, Function, Object) ，
// 那么传入的是一个引用。对该变量的操作将会影响到原本的对象。这样的编程手法将产生附带影响，是的代码的逻辑复杂和可读性变低。

// 3. typeof vs instanceof
// typeof 判断除null以外的原始类型

function _instanceof(L, R) {
  let O = R.prototype
  let N = L.__proto__
  while (N !== null) {
    if (N === O) return true
    N = N.__proto__
  }
  return false
}

// 4. 类型转换
// 转布尔值
// 转数字
// 转字符串

// 对象转原始类型
// 如果是原始类型，就不转换
// 如果需要转换字符串就调用 x.toString() , 转换为基础类型的话就直接返回。
// 如果不是字符串类型的话就先调用valueof
// 结果不是基础类型的话，再调用toString
// 调用x.valueof()，如果转换为基础类型，就直接返回
// 如果没有返回原始类型，就会报错

console.log(4 + [1, 2, 3]); // 41,2,3

// 2 + '' = "2"
// +'3' = 3
// 'a' + + 'b' = 'aNaN'  // 'a' + ( + 'b')
// [] == 0  // true
// 4*[] = 0
// 4*[1,2] = NaN