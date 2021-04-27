// 初次加载就希望图片全都排好
window.onload = function () {
  imgLocation('container', 'box')
}
// 获取到当前有多少张图片要摆放
function imgLocation(parent,content) {
  // 将parent向所有的内容全部取出
  var cparent = document.getElementById(parent)
  var ccontent = getChildElement(cparent, content)
  // 知道第一张图片宽度多少
  var imgWidth = ccontent[0].offsetWidth
  // 知道一行能放多少张图片
  // document.documentElement.clientWidth获取浏览器宽度
  var num = document.documentElement.clientWidth / imgWidth
  // 向下取整
  num = Math.floor(num)
  // 宽度由图片张数来决定而不是浏览器宽度
  cparent.style.cssText = 'width: ${imgWidth*num}px'
  var BoxHeightArr = []
  for (var i = 0; i < ccontent.length; i++){
    // i<num说明在第一排
    if (i < num) {
      BoxHeightArr[i] = ccontent[i].offsetHeight
    } else {
      // 获取最高宽度
      var minHeight = Math.min.apply(null, BoxHeightArr)
      var minIndex = getMinHeightLocation(BoxHeightArr, minHeight)
      // 定位
      ccontent[i].style.position = 'absolute'
      ccontent[i].style.top = minHeight + 'px'
      ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
      // 重新计算高度
      BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight
    }
  }

}
function getChildElement(parent, content) {
  const contentArr = []
  // 取所有的子容器
  const allContent = parent.getElementsByTagName('*')
  for (var i = 0; i < allContent.length; i++){
    // .className获取类名
    if (allContent[i].className == content) {
      contentArr.push(allContent[i])
    }
  }
  return contentArr
}

function getMinHeightLocation(BoxHeightArr,minHeight) {
  for (var i in BoxHeightArr) {
    if (BoxHeightArr[i] === minHeight) {
      return i
    }
  }
}