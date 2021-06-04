// 在规定的时间内只触发一次

// function throttle(fn, delay) {
//   let flag = true
//   return function () {
//     if (flag == false) {
//       console.log(flag);
//       clearTimeout(timer)
//     }
//     flag = false
//     timer = setTimeout(function () {
//       fn()
//       // flag = true 行不通
//     }, delay)
//   }
// }

function throttle(fn, delay) {
  let now = Date.now()
  let context = this
  let arg = arguments
  if (now - prev >= delay) {
    fn.apply(context,arg)
    prev = Date.now()
  }
}