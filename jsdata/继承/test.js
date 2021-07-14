function SuperType(color) {
  this.colors = ['red', 'green', 'blue']
  this.color = color
}
function SubType(color) {
  SuperType.call(this, color)
}
var instance = new SubType()
instance.colors.push('pink')
console.log(instance.colors); // [ 'red', 'green', 'blue', 'pink' ]
var instance2 = new SubType('yellow')
console.log(instance2.colors);