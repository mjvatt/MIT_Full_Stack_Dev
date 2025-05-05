const person = {
	name: 'John',
	age: 30,
	occupation: 'Developer',
	email: "johndoe29@gmail.com",
	isStudent: false
};

// Your code here
function getObjectInformation (person) {
	const infoArray = [];
	for (const key in person) {
		const infoString = "Key: " + key + ", Value: " + person[key];
		infoArray.push(infoString);
	}
	return infoArray;
}


// Don't change this line
if(typeof module !== 'undefined') {
	module.exports = {
		getObjectInformation
	};
}
