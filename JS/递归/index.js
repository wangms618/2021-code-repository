// 5!
// 5*4*3*2*1
function mul(n) { // 阶乘
  if (n == 1)
    return 1
  return n*mul(n-1)
}
console.log(mul(5))

// n*(n-1*(n-2*(n-3)))...到n=1时，返回1，将1代入前表达式，求出值


function fb(n) {
  if (n == 1)
  {
    return 1
  }
  if (n == 2) {
    return 1
  }
  return fb(n-1)+fb(n-2)
}
console.log(fb(15))