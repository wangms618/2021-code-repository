function Student(name, age, sex) {
  // 在对象身上添加属性
  this.name = name
  this.age = age
  this.sex = sex
  this.grade = 2018
}
var student = new Student('pengz', '20', 'boy')
console.log(student);
// new调用得到一个对象
// this指向student,为它创建name,age,sex属性并赋值

// 对象需要属性，this.name 是将构造函数传递的值传入对象对应的属性
// this.name 意味着在对象上添加一个属性name