// function Piont(x, y) {
//   this.x = x
//   this.y = y
// }
// Piont.prototype.toString = function () {
//   return `(${this.x},${this.y})`
// }
// var p = new Piont(1, 2)
// console.log(p);

// 同上基本一致
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return `(${this.x},${this.y})`
  }
}

console.log(typeof Point); //function