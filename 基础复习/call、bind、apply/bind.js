var a = {
  user: 'liu',
  fn: function (x,y,z) {
    console.log(this.user,x,y,z);
  }
}
var b = a.fn

// 下面两种都可以


// var c = b.bind(a)
// c(1,2,3)

var c = b.bind(a, 1, 2, 3)
c()

// b.bind() 会return 一个函数体