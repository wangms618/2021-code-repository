var sum = function () {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i += 1){
    sum += arguments[i];
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5, 5, 6));//26