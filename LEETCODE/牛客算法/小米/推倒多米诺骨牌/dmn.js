// 分析
// 一个字符串中，符号位L代表从当前位置向左倒
// R代表从当前位置向右倒
// 例 ...LR.. => LLLRR
// R..R...L => RRRRR.LL
// 字符串中，两个R中间的.固定为R，L也是如此
// 而R与L之间如果.为奇数，则中间的为.，为偶数，对半分开
var pushDominoes = function(dominoes) {
  let n = dominoes.length
  let res = Array(n).fill(0)
  //受力情况
  let force = 0 // 保留上一次的推力
  //从左往右遍历，碰到r就表示右倾力为最大值，碰到l表示右倾力为0，碰到.，需要更新force力，相当于右倾力小了一点
  for(let i = 0; i < n; i++){
      if(dominoes[i] === "R") force = n; // n为17
      else if ( dominoes[i] === "L") force = 0
      else force =  Math.max(force - 1, 0); // 为点的情况记录推力
      res[i] = force
  }
  console.log(res)
  // 从右往左，碰到r，左倾力为0，碰到l，左倾力为最大值，碰到. 需要更新force，
  force = 0
  for(let i = n - 1; i >= 0; i--){
      if(dominoes[i] === "L") force = n;
      else if(dominoes[i] === "R") force = 0;
      else force = Math.max(force - 1, 0);
      res[i] -= force
  }
  console.log(res)
  //最后遍历res，大于0表示右倾，小于0表示左倾，等于0 表示平衡
  for(let i = 0; i < n; i++){
      if(res[i] > 0) res[i] = "R";
      else if( res[i] < 0) res[i] = "L";
      else  res[i] = "."
  }
  return res.join("")

};
let str = '...R...L....R....'
console.log(pushDominoes(str));