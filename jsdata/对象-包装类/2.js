function Student(name, age, sex) {
  // 在对象身上添加属性
  this.name = name
  this.age = age
  this.sex = sex
  this.grade = 2018
  // return 123 //new会返回对象而不是123
  // return {} // new会返回{} 而不是构造函数构造的对象
  // 构造函数只要不返回对象类型，就不会影响构造函数
  // 构造函数手动返回对象类型，会干扰原构造函数内部的返回
  // 因为 new 会返回对象类型
}
var student = new Student('pengz', '20', 'boy')
console.log(student);
// new调用得到一个对象
// this指向student,为它创建name,age,sex属性并赋值

// 对象需要属性，this.name 是将构造函数传递的值传入对象对应的属性
// this.name 意味着在对象上添加一个属性name


// 一个函数被new了的话，new就会在函数里创建一个this对象
// function Student(name, age, sex) {
//   // 1
//   var this = { // 2
//     name: name, 
//     age: age,
//     sex: sex
//     grade:2018
//   }
//   this.name = name
//   this.age = age
//   this.sex = sex
//   this.grade = 2018

//   return this //3
// }


function myPerson(name, age) {
  var that = {}
  that.name = name
  that.age = age
  return that
}
var person1 = myPerson('zs', 18)
var person2 = myPerson('ls', 20)
console.log(person1, person2);//输出两个对象