// var majorityElement = function(nums) {
//   if(nums.length==1 || nums.length==2) return nums[0]
//   let len = nums.length
//   let num = 0
//   let n = 0
//   for(let i = 0;i<len;i++){
//       num = nums[i]
//       for(let i = 0;i<len;i++){
//           if(num==nums[i]){
//               n++
//           }
//       }
//       if(n>len/2){
//           return num
//       }else{
//           n=0
//       }
//   }

// };


// //  投票，循环数组,用index存储当前最多票数的下标，最后返回
// var majorityElement = function(nums) {
//   let index=0
//   let count = 0
//   for(let i = 0;i<nums.length;i++){
//       if(count==0){
//           index=i
//           count++
//       }else if(nums[index]==nums[i]){
//           count++
//       }else{
//           count--
//       }
//   }
//   return nums[index]

// };

// var majorityElement = function(nums) {
//   nums.sort(function (a, b) { return a - b });
//   let index = 0
//   let len = Math.floor(nums.length/2)
//   while(nums[index]!=nums[index+len]){
//       index++
//   }
//   return nums[index]
// };