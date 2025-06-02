
console.log(document);                                                                  // Länkar js filen till html

let todos = [];                                                                         // En tom array

const buttonElem = document.querySelector("#add-to-do-button");                          // Letar upp add-to-do id elementet i html.
const todolist = document.querySelector("#todoList");                       
console.log(buttonElem);

function displayTodos() { 
    let todoItems = "";
    
    for(let i = 0; i < todos.length; i++) {                                              //
        console.log("Todo nr: ", i);                                                     //
        console.log("Todo: ", todos[i]); 
        todoItems = todoItems + "<p>" + todos[i] + "</p>";
        todoList.innerHTML = todos;
    }
}

buttonElem.addEventListener("click", () => {                                            // Click function
    const todo = prompt("What do you want to do?");                                     // Ger en prompt där användaren skriver ett värde på variabeln "todo".
        todos.push(todo);                                                               // Pushar in variablen "todo" i "todos" array.
            console.log(todos);                                                         // Konsol loggar "todos" array.
            console.log("Now you clicked on the button!");
            
    displayTodos();
});

            

               

             