// 构造函数
function Cat(name, color) { //类
  // this指向 new过后的实例
  this.name = name
  this.color = color
}

// this 有new 提供
let cat1 = new Cat('Tom', '蓝色');
let cat2 = new Cat('蜗牛', '红色');
console.log(cat1.name,cat2.name,'-------')
console.log(cat1.constructor === Cat) //true  constructor指向他的构造者
console.log(cat1 instanceof Cat) // true
console.log(cat2 instanceof Cat) // true
// cat1和cat2都是Cat的实例