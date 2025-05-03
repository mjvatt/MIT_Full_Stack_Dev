// Your code here

isPowerOfTwo = number => {
	if (number <= 0){
		return false;
	} else {
		while (number !== 1){
			if (number % 2 !== 0){
				return false;
			} else {
				number/=2;
			}
		}
		return true;
	}
}


// Don't change this line
if(typeof module !== 'undefined') {
	module.exports = {
		isPowerOfTwo
	};
}
