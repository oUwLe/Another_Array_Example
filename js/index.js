
console.log(document);

let todos = []; // En tom array

const buttonElem = document.querySelector("#add-to-do-button");
console.log(buttonElem);

buttonElem.addEventListener("click", () => {
    console.log("Now you clicked on the button!");

});

const todo = prompt("What do you want to do?");     //Ger en prompt där användaren skriver ett värde på variabeln "todo".

todos.push(todo);               // Pushar in variablen "todo" i "todos" array.

console.log(todos);             // Konsol loggar "todos" array.