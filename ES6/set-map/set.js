// set里比较用===

// const s = new Set() // new Object
// Array.from([1, 2, 3, 4, 1, 2, 3]).forEach((e, i) => {
//   return s.add(e)
// })
// // set不会添加重复值
// console.log(s); // Set(4) { 1, 2, 3, 4 }

// const s = new Set([1, 2, 3, 4, 4])   // [...new Set()]  去重
// console.log(s.size); // 4 长度为4
// let arr = [...s]
// console.log(arr);

// let s = new Set()
// let a = 1
// let b = '1'
// s.add(a)
// s.add(b)
// console.log(s); // Set(2) { 1, '1' } 不发生隐式类型转换

// let s = new Set()
// let a = NaN
// let b = NaN
// s.add(a)
// s.add(b)
// console.log(s); // Set(1) { NaN } 特例

// let s = new Set()
// let a = {}
// let b = {}
// s.add(a)
// s.add(b)
// console.log(s); // Set(2) { {}, {} } 对象存储地址，所以不相等

// let obj = new Object()
// let a = 1
// let b = 1
// obj.a = a
// obj.b = b
// console.log(obj);

// let obj = new Object()
// obj.a = 1
// // 判断对象里面是否具备某个值hasOwnProperty
// console.log(obj.hasOwnProperty('a')); // true




// let s = new Set()
// s.add(1).add(2).add(3)
// s.delete(2)
// console.log(s); // Set(2) { 1, 3 }

// let s = new Set()
// s.add(1).add(2).add(3)
// // s.delete(2)
// // console.log(s.has(1)); // true
// // Array.from() 强制转换为数组
// console.log(Array.from(s)); // [ 1, 2, 3 ]


// 遍历
// let s = new Set(['red', 'green', 'blue'])
// for (let item of s.keys()) {
//   console.log(item); //red green blue
// }
// for (let item of s.values()) {
//   console.log(item); //red green blue
// }

// // entries 返回键值对
// for (let item of s.entries()) {
//   console.log(item);
// }

// for (let item of s) {
//   console.log(item); // red green blue
// }

// let s = new Set(['red', 'green', 'blue'])
// s.forEach((val, key, o) => {
//   console.log(o);  // Set(3) { 'red', 'green', 'blue' }
//   console.log(`${key}:${val}`); // red:red green:green blue:blue
// }) 


// // 过滤器
// let arr = [1, 2, 3, 4, 5]
// // let newArr = arr.filter(x => {
// //   return x > 3
// // })
// // console.log(newArr);  // [ 4, 5 ]

// let newArr = arr.map(x => {
//   return x ** 2
// })
// console.log(newArr); // [ 1, 4, 9, 16, 25 ]

// let s = new Set(['red', 'green', 'blue'])
// // Set不具备filter方法
// let newS = s.filter(x => {
//   return x === 'green'  // 报错
// })
// console.log(newS);

// let s = new Set(['red', 'green', 'blue'])
// let newS = [...s].filter(x => {
//   return x === 'green'
// })
// console.log(newS);