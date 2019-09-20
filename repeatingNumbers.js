const repeatingNumbers = function(arrayData){
   let newString = "";
  for (let i = 0; i < arrayData.length; i++){
    const arr = arrayData[i];
    for (let j = 0; j < arr[1]; j++){
      newString += (arr[0]);
    }
    if (arrayData.length - 1 != i){
    newString += ",";
    }
  }  
return newString;
}

console.log(repeatingNumbers([[1, 2], [2, 3]]));
