var myhour, myminute, mysecond;

function flipNumber(el, newNumber) {
  var thisTop = el.find('.top').clone()
  var thisBottom = el.find('.bottom').clone()
  thisTop.addClass('new')
  thisBottom.addClass('new')
  thisBottom.find('.text').text(newNumber)

  el.find('.top').after(thisTop)
  el.find('.top.new').append(thisBottom)
  el.addClass('flipper')
  el.find('.top.new').find('.text').text(newNumber)
  el.find('.top:not(.new)').find('.text').text(newNumber)
  setTimeout(function () {
    el.find('.bottom:not(.new)').find('.text').text(newNumber)
  },500)
}


function setTime() {
  var date = new Date()
  var seconds = date.getSeconds() + toString()
  if (seconds.length == 1) {
    seconds = '0' + seconds;
  }

  var minutes = date.getMinutes().toString()
  if (minutes.length == 1) {
    minutes = '0' + minutes;
  }
  var hours = date.getHours()
  if (hours > 12)
    hours = hours - 12;
  if (hours == 0) {
    hours = 12;
  }
  hours = hours.toString()
    if (hours.length == 1) {
      hours = '0' + hours;
  }
  
  //把hours放到myhour结构里面去
  if ($(myhour[0]).text() !== hours) {
    flipNumber($(myhour[0]).closest('.flipper'),hours)
  }
}

(function () {
  myhour = $('.clock .flipper:nth-child(1) div:not(.new) .text')
  myminute = $('.clock .flipper:nth-child(2) div:not(.new) .text')
  mysecond = $('.clock .flipper:nth-child(3) div:not(.new) .text')
  // 往dom里面设置时间
  setTime()
})()