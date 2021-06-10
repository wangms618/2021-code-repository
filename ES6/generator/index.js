// function* loadUI() {
//   showLoadingScreen()
//   // yield是暂停，代码运行到第二行开始暂停
//   yield loadUIDataAsynchronously()
//   hideLoadingScreen()
// }

// var loader = loadUI()  // 返回一个遍历器
// // 加载UI
// loader.next()
// loader.next()

// function* main() {
//   var result = yield request('http://some.url')
//   var resp = JSON.parse(result)
//   console.log(resp.value);
// }

// function request(url) {
//   makeAjaxCall(url, function (res) {
//     it.next(res)  // 2
//   })
// }
// var it = main()
// it.next()  // 1

// function* numbers() {
//   let file = new FileReader('numbers.txt')
// }


// 控制流管理


// new Promise((resolve,reject)=>{
//   step1(function(value1){
//     resolve(value1)
//   })
// }).then((resolve,reject)=>{
//   step2(function(value2){
//     resolve(value2)
//   })
// }).then((resolve,reject)=>{
//   step3(function(value3){
//     resolve(value3)
//   })
// }).then((resolve,reject)=>{
//   step4(function(value4){
//     resolve(value4)
//   })
// })

// Promise.resolve(step1)
//   .then(step2)
//   .then(step3)
//   .then(step4)
//   .then((value4) => {
//     //...
//   })

function* longRunningTask(value1) {
  try {
    var value2 = yield step1(value1)
    var value3 = yield step1(value2)
    var value4 = yield step1(value3)
    var value5 = yield step1(value4)
  } catch (error) {
    // .. 
  }
}

scheduler(longRunningTask(initValue))
function scheduler(task) {
  var taskObj = task.next(task.value)
  if (!taskObj.done) {
    task.value = taskObj.value
    scheduler(task)
  }
}