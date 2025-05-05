// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'kiwi', 'mango', 'orange', 'pear', 'pineapple', 'strawberry'];
function displayFruitsInformation(fruits) {
	let fruitSentences = [];
	let shortestFruit=fruits[0];
	let longestFruit=fruits[0];

	for (const fruit of fruits) {
		fruitSentences.push("I love " + fruit + ".");
		if (fruit.length > longestFruit.length) {
			longestFruit = fruit;
		} 
		if (fruit.length < shortestFruit.length) {
			shortestFruit = fruit;
		}
	}
	return {
		fruitSentences: fruitSentences,
		shortestFruit: shortestFruit,
		longestFruit: longestFruit
	}
}

// Don't change this line
if(typeof module !== 'undefined') {
	module.exports = {
		displayFruitsInformation
	};
}
