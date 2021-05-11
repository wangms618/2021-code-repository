// 异步
// var a = 1

// console.log(a);

// function b() {
//   console.log(123);
// }

// setTimeout(function() {
//   console.log('abc');
// }, 1000)

// b()

// console.log(234);

// function xq() {
//   setTimeout(function () {
//     console.log('杨总相亲了');
//   }, 1000)
// }

// function marry() {
//   setTimeout(function () {
//     console.log('杨总结婚了');
//   }, 500);
// }
// xq()
// marry()
// 杨总结婚了
// 杨总相亲了

function xq() {
  return new Promise((reslove, reject) => {
    // reslove 顺利执行
    // reject 执行错误
    setTimeout(function () {
      console.log('杨总相亲了');
      reslove('相亲成功！') //
    }, 1000)
  })
}

function marry() {
  return new Promise((reslove, reject) => {
    setTimeout(function () {
      console.log('杨总结婚了');
      reslove('很开心！')
    }, 1500);
  })
}

function baby() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('小杨出生');
      resolve()
    }, 300)
  })
}
function baby2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('小杨2出生');
      resolve()
    }, 200)
  })
}
function baby3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('小杨3出生');
      resolve()
    }, 600)
  })
}


function again() {
  console.log('再相亲一次');
}


function buyHouse() {
  console.log('给baby买房');
}

const p = Promise.race([baby(), baby2(), baby3()])
p.then(buyHouse)
// xq().then(marry().then(baby))

// xq().then(() => {
//   marry().then(() => {
//     baby()
//   })
// })

// xq().then(marry).then(baby)

// xq().then((res) => {
//   console.log(res);
//   return marry()
// }).then((res) => {
//   console.log(res)
//   return baby()
// })


// reject 只能用catch
// xq().catch((err) => {
//   console.log(err)
//   again()
// })

















// .then 会让里面的函数更后执行
// 杨总相亲了
// 杨总结婚了

