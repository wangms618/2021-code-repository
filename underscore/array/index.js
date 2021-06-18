const underscore = require('../underscore-min.js')
let arr = [1, 2, 3, 4, 1, 2, 3]
// console.log([...new Set(arr)]); // [1,2,3,4] 数组去重
let newArr = underscore.uniq(arr) // underscore去重
console.log(newArr);