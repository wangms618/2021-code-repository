// 用途
// function ajax(type, url, data) {
//   var xhr = new XMLHttpRequest()
//   xhr.open(type, url, true)
//   xhr.send(data)
// }

var person = [{ name: '以' }, { name: '共' }]
var msg = person.map((item) => {
  return item.name;
})
console.log(msg);