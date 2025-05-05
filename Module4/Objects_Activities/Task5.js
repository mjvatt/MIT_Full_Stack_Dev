const borrowedBooks = [];

function borrowBook (library, title, borrowedBooks){
	for (let book in library){
		if (library[book].title===title){
			if (library[book].available){
				borrowedBooks.push(library[book]);
				library[book].available=false;
			}
		}
	}
}

function returnBook (library, title, borrowedBooks) {
	let bookIndex = -1;
	for (let book in borrowedBooks){
		if (borrowedBooks[book].title===title){
				borrowedBooks[book].available=true;
				bookIndex=borrowedBooks.indexOf(book);
				break;
		}
		if(bookIndex !== -1){
			removeBook(borrowedBooks,bookIndex);
		}
	}
}

