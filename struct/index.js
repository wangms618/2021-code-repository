// var str = 'abcde'
// console.log(str.length);

// var num = 123
// console.log(num.toString());

// var bool = true
// var un = undefined
// var nu = null
// var key1 = Symbol('1')
// var key2 = Symbol('1')
// console.log(key1 == key2)

// var obj = {
//   name: '袁总',
// }
// obj.gFriend = '小范'

// var arr = [0,1, 2, 3, 4]
// arr[3] = 33 //[ 0, 1, 2, 33, 4 ]
// console.log(arr)


// const arr1 = []
// const arr2 = (new Array(7)).fill(1)
// // console.log(arr2)
// // [1, 1, 1, 1, 1, 1, 1]



// // for (let i = 0; i < arr2.length; i++){
// //   console.log(arr2[i], i);
// // }

// arr2.forEach((item, index) => {
//   console.log(item, index);
// })

// const arr3 = arr2.map((item, index) => {
//   // console.log(item, index);
//   return item + 1
// })
// // console.log(arr3);


// 二维数组
const arr = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
  
]

const arr1 = (new Array(7)).fill([])

// fill工作机制：如果给fill是引用，fill填充的是入参的引用
console.log(arr1);




const stack = []//栈
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.pop()
stack.pop()
