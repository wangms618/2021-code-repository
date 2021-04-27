// 封装，JS通过函数来创建对象
function Cat(name, color) {
  return {
    name: name,
    color:color
  }
}
var cat1 = new Cat('大毛', '黄色')
var cat2 = new Cat('二毛', '黑色')
console.log(cat1, cat2, '---------')
// cat1 和 cat2是没关系的