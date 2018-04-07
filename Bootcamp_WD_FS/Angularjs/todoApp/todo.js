angular.module('todoApp', [])
    .controller('TodoListController', function() {
        let todoList = this;
        todoList.todos = [
            {text:'Build an Industiral Apiary', done:false},
            {text:'Create SAI and Monetize him!', done:false},
            {text:'Earn as a Software Engeneer', done: false},
            {text:'Mary Anastasia Tsukrova', done: false},
            {text:'Lose 5 kg of weight', done: true}
        ];

        todoList.addTodo = function() {
            todoList.todos.push({text:todoList.todoText, done:false});
            todoList.todoText ='';
        };

        todoList.remaining = function() {
            let count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        todoList.archive = function() {
            let oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };

    });