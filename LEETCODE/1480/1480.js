// 1,2,3,4
// 1,1+2,1+2+3,1+2+3+4

var runningSum = function(nums) {
  let newArr =[];
  for(let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = 0; j <= i; j++) {
          sum += nums[j];
      }
      newArr.push(sum);
  }
  return newArr;
};