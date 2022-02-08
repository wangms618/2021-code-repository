// const ws = new WeakSet()
// ws.add(1) // 报错
// wxs.add({})
let a = [[1, 2], [3, 4]]
const ws = new WeakSet(a)
console.log(ws);