// 编写一个函数，该函数接受一个由10个整数组成的数组(介于0到9之间)，该数组以电话号码的形式返回这些数字的字符串。
// 正则表达式
function createPhoneNumber(numbers) {
  //  var a ="";
  // a=numbers.join("")
  // console.log(a)
  // var len = numbers.length;
  numbers.unshift("(")//向数组头部添加一个元素
  // len++;
  numbers.splice(4,0,") ")//在指定位置添加一个元素
  numbers.splice(8, 0, "-")
  numbers=numbers.join("")// 将数组的元素组成字符串
  return numbers
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"·