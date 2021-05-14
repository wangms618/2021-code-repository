Person.prototype.lastName = 'zhu'
function Person() {
}
var person = new Person()
console.log(person.lastName)//zhu
Person.prototype.lastName = 'yuan' //改
console.log(person.lastName)//yuan
delete Person.prototype.lastName
console.log(person.lastName) //


// 删
delete Person.prototype.lastName
Person.prototype.lastName = 'yuan' //改