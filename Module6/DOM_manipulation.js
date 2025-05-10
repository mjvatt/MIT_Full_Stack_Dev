const greetButton = document.getElementById("greetButton");

function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  const greetingDisplay = document.getElementById("greetingDisplay");
  if (name !== "") {
    const greeting = document.createElement("h1");
    // If the `name` variable is not an empty string, use the textContent property to display a greeting message
    // For instance if the name is 'Steve', the greeting should display "Hello, Steve!".
    

    greetingDisplay.innerHTML = "";
    greeting.textContent = `Hello, ${name}!`;
    greetingDisplay.appendChild(greeting);
  } else {
    const greeting = document.createElement("p");
    // Else, if the `name` is empty, use the `textContent` to prompt the user to enter a non-empty name

    greetingDisplay.innerHTML = "";
    greeting.textContent = "Please enter your name";
    greetingDisplay.appendChild(greeting);
  }
}

greetButton.addEventListener("click", greetUser);
