var baseObj = {
  randomNum: function (min, max) {
    // 返回0到1之间的随机数
    // 取整
    return parseInt(Math.random() * (max - min + 1) + min)
  }
}