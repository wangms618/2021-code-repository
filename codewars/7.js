// 给定整数数组，查找出现奇数次的整数数组。
// 总是只有一个整数出现奇数。
// 数组长度为1输出数组元素直接输出本身



// forEach遍历


function findOdd(a) {
  let l = a.length
  let obj = {}
  a.forEach((val,idx) => {
      !obj[a[idx]] ? obj[a[idx]] = 1 : obj[a[idx]] += 1
  })
  for(let i in obj){
      if(obj[i] % 2 !== 0){
          return parseInt(i)
      }
  }
}

// 使用^运算符，将数组全部进行异或运算
function findOdd(a){
  return a.reduce((a,b) => a^b)
}
