// Multiples of 3 or 5
// 输入一个数字，求出低于这个数字以内所有3和5倍数之和，同是3和5倍数的就当成一个数来算
// 循环遍历，如果数字除以3没有余数，或除以5没有余数，则加入
function solution(number){
  if (number < 0) return 0
  var num = 0;
  for (var i = number - 1; i > 0; i--){
    if (i % 3 == 0 || i % 5 == 0) {
      num += i;
    }
  }
  return num
}

console.log(solution(10))