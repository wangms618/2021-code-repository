const obj = {
  a: 1,
  b: 2
}
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));