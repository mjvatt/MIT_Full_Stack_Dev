// Example student array
const students = {
	"9512bb98a69e563dfd4edf7f": { //9512bb98a69e563dfd4edf7f is the student id.
		name: "Alice",
		age: 22,
    courses: ["Math", "Science"]
	}
};

const transformedStudents = [];
function transformData(students) {
for (let student in students){
  transformedStudents.push({
    id: student,
    name: students[student].name,
    age: students[student].age,
    courseCount: students[student].courses.length
  })
}
return transformedStudents;
}
// Don't change this line:
if(typeof module !== 'undefined') {
	module.exports = {
		transformData
	};
}
