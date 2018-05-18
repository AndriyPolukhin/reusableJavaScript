var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log('My todos', todos);
}

function addTodo(todo) {
    todo.push(todo);
    displayTodo();
}

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodo();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}