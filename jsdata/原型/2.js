// Car.prototype.height = 1000
// Car.prototype.lang = 4900
// Car.prototype.carName = 'BWM'
// 优化，不用每次调用构造函数都需要调用
// this.height = 1000
// this.lang = 4900
// this.carName = 'BWM'


Car.prototype = {
  height: 1000,
  lang: 4900,
  carName: 'BMW'
}

function Car(color, owner) {
  // this.height = 1000
  // this.lang = 4900
  // this.carName = 'BMW'
  this.color = color
  this.owner = owner
}

var car = new Car('yellow', 'haonan')
var car1 = new Car('pink', 'huihui')
console.log(car.carName); //BMW
console.log(car); //{ color: 'pink', owner: 'huihui' }

