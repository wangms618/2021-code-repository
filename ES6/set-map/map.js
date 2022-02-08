// let obj = new Object()
// obj[1] = 1
// console.log(obj); // { '1': 1 }

// const m = new Map()
// const o = { p: 'Hello World' }
// m.set(o, 'content')
// console.log(m); // Map(1) { { p: 'Hello World' } => 'content' }
// console.log(m.get(o)); // content
// console.log(m.has(o)); // true
// m.delete(o)
// console.log(m.has(o)); // false


// const m = new Map([
//   ['name', 'dd'],
//   ['title', 'teacher']
// ])
// console.log(m); // Map(2) { 'name' => 'dd', 'title' => 'teacher' }
// console.log(m.has('name')); // true
// console.log(m.get('name')); // dd

// const items = [
//   ['name', 'dd'],
//   ['title', 'teacher']
// ]
// const m = new Map()
// items.forEach(([key, val]) => {
//   return m.set(key, val)
// })
// console.log(m); // Map(2) { 'name' => 'dd', 'title' => 'teacher' }

// const set = new Set([
//   ['foo', 1],
//   ['bar', 2]
// ])

// const m = new Map(set)
// console.log(m.get('foo'));  // 1


const map = new Map([['baz', 3]])

const m = new Map(map)
console.log(m);  // Map(1) { 'baz' => 3 }
m.clear() // 清空所有值
console.log(m); // Map(0) {}

