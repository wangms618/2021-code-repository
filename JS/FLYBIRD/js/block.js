function Block() {
  this.upDivWrap = null
  this.downDivWrap = null
  this.downHeight = baseObj.randomNum(0, 150)
  this.gapHeight = baseObj.randomNum(150, 160)
  this.upHeight = 312 - this.downHeight - this.gapHeight

  // 生成管道
  this.createDiv = function(url, height, positionType, left, top) {
    var newDiv = document.createElement('div')
    newDiv.style.width = '62px'
    newDiv.style.height = height
    newDiv.style.position = positionType
    newDiv.style.left = left
    newDiv.style.top = top
    newDiv.style.backgroundImage = url
    return newDiv
  }

  this.createBlock = function() {
    var upDiv1 = this.createDiv('url(img/up_mod.png)', this.upHeight + 'px')
    var upDiv2 = this.createDiv('url(img/up_pipe.png)', '60px')
    this.upDivWrap = this.createDiv(null, null, 'absolute', '450px')
    this.upDivWrap.appendChild(upDiv1)
    this.upDivWrap.appendChild(upDiv2)

    jsWrapBg.appendChild(this.upDivWrap)
  }
}