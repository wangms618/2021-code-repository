# 原型
定义：函数function对象的一个属性，定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承原型的属性和方法。原型也是对象(里面有一个constructor属性返回父代)。
```js
//1.png
function Person() {
}
console.log(Person)
```
```js
function Person() {
}
console.log(Person.prototype)
```

给原型加属性和方法会发生什么
```js
// Person.prototype -- 原型
// 函数被定义出来天生就具备 prototype 属性 Person.prototype = { }
Person.prototype.name = '敏敏'
Person.prototype.say = function () {
  console.log('有点虚');
}

function Person() {

}
var person = new Person()
console.log(person.name);//敏敏
person.say() // 有点虚
```
通过该构造函数产生的对象，可以继承原型的属性和方法。


```js
Person.prototype.name = '敏敏'
Person.prototype.say = function () {
  console.log('有点虚');
}

function Person() {
  this.name = '小王'
}
var person = new Person()
console.log(person.name);//小王
person.say() // 有点虚  4.png
```
- 实例对象显式具备的属性从构造函数来，隐式具备的属性从构造函数的原型来
- 实例不能直接修改原型上的属性
如果要修改 ```  ```

2. 利用原型的特点和概念，可以提取共有属性
先看这个构造函数
```js
function Car(color, owner) {
  this.height = 1000
  this.lang = 4900
  this.carName = 'BMW'
  this.color = color
  this.owner = owner
}
```
我们平时创建构造函数时，一般会这样写代码，当每次执行时，会重复调用前三行代码，如果我们运用原型，就能很好的优化
优化，不用每次调用构造函数都需要调用
``` js
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
console.log(car1); //{ color: 'pink', owner: 'huihui' }
```
我们可以看到依旧能打印出car.carName的值，但是打印car1只能显示color和owner，说明隐式具备的属性不调用不会显示

3. 原型的增删改查
- 实例不能直接修改或删除原型上的属性
```js 
Person.prototype.lastName = 'zhu'
function Person(name) {
  this.name = name
}
var person = new Person('junde')
console.log(person.lastName)//zhu
person.lastName = 'yuan'
console.log(person.lastName)//yuan
```