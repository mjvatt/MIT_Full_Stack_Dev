// Your code here

function calculateFactorial(number){
let factorial=1;
for (let i = number; i>0;  i--){
	factorial*=i;
	}
  return factorial;
}


// Don't change this line
if(typeof module !== 'undefined') {
	module.exports = {
		calculateFactorial
	}
}
