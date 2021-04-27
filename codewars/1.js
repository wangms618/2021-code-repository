// 字符串处理
// - 如果字符串超过140字，返回false.length
// - 如果是空字符, 返回false
// - 以#开头
// - 每个单词首字母大写
// hello World
// #Hello World
/**
 * @author 王
 * @date 2021-4-16
 * @func 格式化字符串，返回#开始的大写单词
 * @param {string} str
 * @retrun {string}
 */

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);//charAt() 方法可返回指定位置的字符
  // slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
}

function generateHashTagWithCapitalWords(str) {
  return str.length > 140 || str == '' ? false : '#' + str.split(' ').map(capitalize).join('');
  // if (str.length > 140 || str === ' ') {
  //   return false;
  //   //   return str.length > 140 || str === '' ? false : '#' +str
  // }
  // else {
  //   // 从整到零，从零到整的过程
  //   var words = str.split(' ');
  //   console.log(words);
  //   // 对每个单词都去大写化
  //   // for
  //   // 1. forEach 支持遍历每个元素，执行一个callback
  //   // 2. map 也有同上功能 
  //   // 3. forEach没有返回值，map有返回值,但只在新的数组里修改
  //   // 4. map可以返回一个新数组，一个旧数组到新数组的过程，
  //   words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))// map
  //   // words = words.forEach(word => word.charAt(0).toUpperCase() + word.slice(1))// forEach没有返回值
  //   // console.log(words);
  //   return '#' + words.join(' ')
  // }
  
}
  

console.log(generateHashTagWithCapitalWords('hello world'));