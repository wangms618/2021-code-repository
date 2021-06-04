// 防止抖动:在规定的时间内，没有触发第二次，则执行

function debounce(fn, delay) {
  let timer = null
  return function () {
    let arg = arguments
    let context = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context,[...arg])
    },delay)
  }
}