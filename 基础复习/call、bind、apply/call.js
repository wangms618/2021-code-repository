var a = {
  user: 'liu',
  fn: function (x,y,z) {
    console.log(this.user,x,y,z);
  }
}
var b = a.fn
b.call(a,1,2,3)