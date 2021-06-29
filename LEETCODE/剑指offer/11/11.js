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
};