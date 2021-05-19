// 四舍五入
Math.round = function (number) {
  return Number(number.toFixed())
};
console.log(Math.round(0.5));
// 去尾
Math.floor = function (number) {
  return parseInt(number); // TODO: fix this
};
console.log(Math.floor(9.65));
// 向上取整
Math.ceil = function (number) {
  // if (number > parseInt(number)) {
  //   return parseInt(number) + 1
  // } else {
  //   return parseInt(number)
  // }
  return number > parseInt(number) ? parseInt(number) + 1 : parseInt(number)
};
console.log(Math.ceil(9.4));
