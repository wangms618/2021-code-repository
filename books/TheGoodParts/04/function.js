function a() {

}
// console.log(a);//[Function: a]
// console.log(a.prototype);//{}

// 4.2
var add = function (a, b) {
  return a + b;
}

// 4.3 方法调用模式
var myObject = {
  value: 0,
  increment: function (inc) {
    // this可以访问对象
    this.value += typeof inc === 'number' ? inc : 1;
  }
}
// 方法可以使用this去访问对象，使用它能从对象中取值或修改该对象
// this到对象的绑定发生在调用的时候
// 通过this可取得它们所属对象的上下文的方法称为公共方法
myObject.increment();
console.log(myObject.value);
myObject.increment(2);
console.log(myObject.value);


//4.3 函数调用模式
myObject.double = function () {
  var that = this;// 解决方法
  var helper = function () {
    that.value = add(that.value, that.value);
  };
  helper(); // 以函数的形式调用helper
}
myObject.double();
console.log(myObject.value);
// 构造器调用模式
var Quo = function (string){
  this.status = string;
};
Quo.prototype.get_status = function(){
   return this.status;
};
var myQuo = new Quo ("confused");
console.log(myQuo.get_status());

var array = [3, 4];
// 注意：apply第一个参数传递为null，并不是说将add函数的运行上下文环境设置为null，而是设置为全局对象window。
var sum = add.apply(null, array);
console.log(sum);//7

var statusObject = {
  status:'A-OK'
}
// statusObject 并没有继承自Quo.prototype，但是我们可以在statusObject上调用get_status方法，尽管statusObject并没有一个名为get_status的方法
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);//A-OK