let mrChen = {
  name: 'laochen',
  age: 20,
  sex: 'boy',
  drink: function () {
    console.log('I am drink');
    this.health++
  },
  somke: function () {
    console.log('I am smoking! cool!');
    this.health--
  },
  health:100
}
// mrChen.somke()
// mrChen.drink()
// mrChen.drink()
// console.log(mrChen.health)

mrChen.boyFriend = 'peng'
console.log(mrChen);
mrChen.sex = 'man'
delete mrChen.sex
console.log(mrChen.sex);
// 当访问一个不存在的变量会报错，当访问一个对象中不存在的属性就为 undefined ???
