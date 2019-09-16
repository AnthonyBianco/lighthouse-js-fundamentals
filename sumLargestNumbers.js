let sumLargestNumbers = function(data){
  var maxOne = 0;
  var maxTwo = 0;

  for ( var i = 0; i <= data.length; i++){
    if (maxOne < data[i]){
      maxTwo = maxOne;
      maxOne = data[i];
    } else if (maxTwo < data[i]){
      maxTwo = data[i];
    }
  }
 
  return maxOne + maxTwo;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));