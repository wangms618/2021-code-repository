// var climbStairs = function(n) {
//   var a = [1,2]
//   for(let i=2;i<n;i++){
//       a.push(a[i-1]+a[i-2])
//   }
//   return a[n-1]
// };
// 优化，用三个变量求解

// 尾递归
// var climbStairs = function(n,n1=1,n2=2) {
//   if(n==1){
//       return n1
//   }
//   if(n==2){
//       return n2
//   }
//   return climbStairs(n-1,n2,n1+n2)
// };

// 如果创建函数或创建局部变量时，在栈上面申请空间，在内存的高地址分配
var climbStairs = function(n) {
    
};