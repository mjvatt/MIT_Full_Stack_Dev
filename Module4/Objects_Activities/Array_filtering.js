let evenNumbers = [];
let oddNumbers = [];
function segregateNumbers (numbers) {
	for (let i = 0; i < numbers.length; i++)  {

		if (numbers[i] % 2 === 0) {
			evenNumbers.push(numbers[i]);
		} else {
			oddNumbers.push(numbers[i]);
		}

	}
	return {
		oddNumbers: oddNumbers,
		evenNumbers: evenNumbers
	}
}




// Don't change the next line
if(typeof module !== "undefined") {
	module.exports = {
		segregateNumbers
	}
}
