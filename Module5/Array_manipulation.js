function addStudent(students, id, name, age, grade){
  let student = {};
  student = {id, name, age, grade};
  students.push(student);
  return students;
}

function removeStudent(students, order){
	let studentToRemove="";
	if (order==="first"){
		studentToRemove = students.shift();
		return studentToRemove;
	} else if (order==="last") {
		studentToRemove = students.pop();
		return studentToRemove;
	} else {
		return "The order is invalid";
	}
}

function removeStudentByName(students, studentName) {
  let studentIndex=-1;
  for (let i=0; i<students.length; i++){
    if (students[i].name===studentName){
      studentIndex=i;
      break;
    }
  }

  if (studentIndex===-1){
    return "Student not found.";
  }

  let removedStudent = students.splice(studentIndex, 1);
  return removedStudent;
}

function reorderStudent(students, studentName, newIndex){
	if (newIndex>=students.length){
		return `${newIndex} is out of the limits of the array.`;
	}
	
	if (students[newIndex].name ===studentName){
		return `Student with name ${studentName} is already at the index ${newIndex}`;
	}

	let studentToReorder=null;

	for (let i=0; i<students.length; i++){
		if (students[i].name===studentName){
			studentToReorder=students[i];
			break;
		}
		
	}

	if (studentToReorder===null){
		return `Student with the name ${studentName} was not found.`;
	} 
	
	const indexToReorder=students.indexOf(studentToReorder);
	students.splice(indexToReorder, 1);
	students.splice(newIndex, 0, studentToReorder);
	return studentToReorder;
}


// Don't change this line:
if(typeof module !== 'undefined') {
	module.exports = {
		addStudent
	}
}
