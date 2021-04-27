// 输入两个整数a,b
// a,b定义范围[a,b]
// 函数返回在[a,b]中符合要求的数字
// 数字要求 89 = 8^1 + 9^2，135 = 1^1 + 3^2 + 5^3

// 解
// 先创建一个空数组放值
// 先遍历a,b  
// 获得一个数，判断数的位数n
// 可以将数字转换为字符串然后计算长度 
// 循环取字符串每一位并转化为数值类型
// 按照规则将这些数字进行运算
// 判断当前数值与运算后的数值是否相等，相等则加入数组
// 循环结束，输出数组
function sumDigPow(a, b) {
  let num = [];// 空数组放符合的值
  let nums = 0;
  for (a; a <= b; a++){
    a = a + '';
    n = a.length;// 获取数字长度
    for (let i = 0; i < n; i++){// 循环从第一位开始取字符串
      // 循环取字符串，转化为数字
      var res = a.slice(i, i + 1)
      res = Number(res)
      nums += Math.pow(res, i+1) //次方运算，按照之前的规则
    }
    if (nums == a)
    {
      num.push(nums);
      nums = 0;
    }
    else {
      nums = 0;
    }
  }
  return num;
}
console.log(sumDigPow(1,300))

