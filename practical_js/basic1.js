var todos = ['item 1', 'item 2', 'item 3'];

// Function to display
function displayTodos() {
    console.log('My tods:', todos);
}

// Function to add
function addTodo(todo) {
    todos.push(todo);
    displayTodo();
}

// Function to change
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodo();
}

// Function to delete
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}