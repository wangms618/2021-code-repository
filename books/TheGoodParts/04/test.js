var value = 4 ;
var test = {
  value: 3,
}
test.double = function () {
  var helper = function () {
    // 调用this，正常情况下应该能调用到test函数的value值
    this.value = this.value + this.value;
    console.log(this.value)// 输出NaN，原因是this没有被绑定到外部函数，而是绑定到全局对象
  };
  helper();
}
test.double()
console.log(test.value)//3


// 解决方法
var value = 4 ;
var test = {
  value: 3,
}
test.double = function () {
  var that = this;// 解决方法
  var helper = function () {
    that.value = that.value + that.value;
    console.log(that.value)// 输出6，内部函数获得了外部函数value的值
  };
  helper();
}
test.double()
console.log(test.value)//6

