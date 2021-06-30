<<<<<<< HEAD
var minArray = function(numbers) {
  let low = 0;
  let high = numbers.length-1;
  while(low<high){
      const mid = low+Math.floor((high-low)/2)
      if(numbers[mid]<numbers[high]){
          high = mid
      } else if(numbers[mid]>numbers[high]){
          low = mid + 1
      } else{
          high--
      }
  }
  return numbers[low]
=======
var minArray = function(numbers) {
  let low = 0;
  let high = numbers.length-1;
  while(low<high){
      const mid = low+Math.floor((high-low)/2)
      if(numbers[mid]<numbers[high]){
          high = mid
      } else if(numbers[mid]>numbers[high]){
          low = mid + 1
      } else{
          high--
      }
  }
  return numbers[low]
>>>>>>> 419c4b0c05c09800f368d3c7e32a54a8171bee81
};