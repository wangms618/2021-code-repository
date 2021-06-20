function extendDrag(drag) {
  // 鼠标按下
  let stopAnimate = function (curEle) {
    clearInterval(curEle.flyTimer)
    curEle.speedFly = undefined
    clearInterval(curEle.dropTimer)
  }
  // 鼠标移动
  let computedFly = function (curEle) {
    if (curEle.lastFly) {
      
    }
  }
}