/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

 var removeElement = function(nums, val) {
  if(nums==null || nums.length==0 ){
      return 0
  }else{
      var j=0
      for(var i=0;i<nums.length;i++){
      if(nums[i]!=val)
      {
          nums[j]=nums[i]
          j++
      }
      }
      return j
  }

};