// fetch('https://www.baidu.com')
//   .then((response) => {
//     console.log(response);
//     return fetch('https://www.baidu.com/test')
//   }).then((response) => {
//     console.log(response);
//   }).catch((error) => {
//     console.log(error);
//   })


// async function foo() {
//   try {
//     let res1 = await fetch('https://www.baidu.com')
//     console.log(res1);
//     let res2 = await fetch('https://www.baidu.com/test')
//     console.log(res2);
//   } catch (error) {
//     console.log(error);
//   }
// }
// foo()

// 这段代码的返回结果给了async
// async function bar() {
//   return 2
// }
// console.log(bar()); // Promise { 2 }

await 100
let promise_ = new Promise((resolve, reject) => {
  resolve(100)
})

// promise_.then((a) => {
//   console.log(a);
//   console.log(2); 
//   //....
// })


// async function bar() {
//   console.log(1);
//   let a = await 100
//   console.log(a);
//   console.log(2);
// }
// console.log(0);
// bar() // 启动 bar ·协程
// console.log(3);
//  // 0 1 3 100 2



async function foo() {
  console.log('foo')  // 3
}
async function bar() {
  console.log('bar start')  // 2
  await foo()
  console.log('bar end') // 6
}
console.log('script start') // 1
setTimeout(function () {
  console.log('setTimeout')  // 8
}, 0)
bar();
new Promise(function (resolve) {
  console.log('promise executor')  // 4
  resolve();
}).then(function () {
  console.log('promise then')  // 7
})
console.log('script end')  // 5

// script start
// bar start
// foo
// promise executor
// script end
// bar end
// promise then
// setTimeout