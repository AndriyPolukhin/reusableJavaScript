// Store in an array
// var todos = ['item 1', 'item 2', 'item 3'];

// Store in an object
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],

    // Display
    displayTodos: function () {
        console.log('My Todos', this.todos);
    },
    // Add
    addTodo: function (todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    //Change
    changeTodo: function (position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    //Delete
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }

};