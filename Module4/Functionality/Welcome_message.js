
// This is where your task begins
function displayWelcomeMessage() {
  // Enter two nice welcome lines that you want to display in the paragraphs  
  const paragraph1Content = 'WELCOME! We are so glad to have you here!';
  const paragraph2Content = 'This is where we are going to teach you about finance and let you ask any questions you may have.';

	
  // Do not change the below line.
  return { paragraph1Content, paragraph2Content }
}

// Don't change this line
if(typeof module != 'undefined') {
  module.exports = { displayWelcomeMessage };
}


