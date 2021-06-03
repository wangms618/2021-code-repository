function createPerson(origin) {
  var clone = Object.create(origin)
  clone.sayGood = function () {
    console.log('hello world');
  }
  return clone
}

var obj = { name: '蟹老板' }
var per1 = createPerson(obj)
per1.__proto__.name = '海绵宝宝'
console.log(obj); // { name: '海绵宝宝' }