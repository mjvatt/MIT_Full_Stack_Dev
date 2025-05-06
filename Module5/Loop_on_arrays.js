function squareNumbers(my_array){
  squaredArray=[];
  for (let num of my_array){
    num*=num
    squaredArray.push(num);
  }
  return squaredArray;
}

function filterEvenNumbers(my_array){
  let evenArray=[];
  for (let num of my_array){
    if (num % 2 == 0) {
      evenArray.push(num)
    }
  }
  return evenArray;
}

function filterEvenNumbers(my_array){
  let evenArray=[];
  for (let num of my_array){
    if (num % 2 == 0) {
      evenArray.push(num)
    }
  }
  return evenArray;
}

function calculateAverageLength(my_array){
  let avgWordLengths=0;
  let sumLengths=0;
  if (my_array.length===0){
      return 0;
  } else{
    for (let num of my_array){
      
      sumLengths=sumLengths+num.length;
    }
  }
  avgWordLengths=sumLengths/my_array.length;
  return avgWordLengths;
}

//Do not change the code below
if (typeof module !== 'undefined') {
  module.exports = { squareNumbers };
}
