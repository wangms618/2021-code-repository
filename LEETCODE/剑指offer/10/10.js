var numWays = function(n) {
  let n1 = 0,n2 = 1,num = 1
  for(let i=0;i<n;i++){
      num = (n1+n2)%1000000007
      n1 = n2
      n2 = num
  }
  return num
};