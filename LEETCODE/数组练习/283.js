/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
// 如果是零，在原数组末尾加0，删除当前元素，循环长度减一
var moveZeroes = function(nums) {
   let len = nums.length;
   for(let i=0;i<len;i++){
       if(nums[i]==0){
           nums.splice(i,1)//删除当前位置元素
           nums.push(0);
           i--;//重原来位置继续遍历
           len--;//末尾添加元素不用遍历
       }
   }
   return nums
};