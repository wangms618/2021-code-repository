function getJson() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(2)
      console.log('JSON');
      return 'JSON'
    }, 200)
  })
}

function show() {
  console.log('渲染页面');
}


// 放上async代表里面可以放异步(不仅仅是函数)，并不代表当前函数是异步
async function test() {
  // await会让后续的下一行代码去到下一次事件循环的微任务队列
  await getJson() // 在异步函数前面加上await，函数执行就会等待await声明的异步函数执行完毕后，再往下执行  
  // await getJson()会return reslove()中的值
  // console.log(await getJson());//JSON 2 渲染页面
  show()
}
test()
// getJson().then(show)


// console.log(1);

// setTimeout(() => {
//   var a = 2
//   console.log(a);
//   fn()
// }, 1000)

// function fn() {
//   setTimeout(() => {
//     console.log(3);
//   }, 2000)
// }
// console.log(4);