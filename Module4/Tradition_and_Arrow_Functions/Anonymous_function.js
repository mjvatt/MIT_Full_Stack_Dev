//Your code here

isPerfectNumber = number => {
  if (number <= 0) {
    return false; 
  }
  let sum=0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum+=i;
    }
  }
  return sum === number;
};


// Don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    isPerfectNumber
  };
}
