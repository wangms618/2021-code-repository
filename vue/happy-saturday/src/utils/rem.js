(function(doc, win) {
  let docEl = doc.documentElement,  // 获取根结点
      resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
      let recalc = function () {
          let clientWidth = docEl.clientWidth
          if (!clientWidth) return
          docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
      }
      if(!doc.addEventListener) return
      win.addEventListener(resizeEvt, recalc, false)
      doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)