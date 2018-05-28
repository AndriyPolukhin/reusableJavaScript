const todoList = {
    todos: [],
    addTodo(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        this.todos.forEach(function (todo) {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        })
    }
};




const handlers = {
    addTodo() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo() {
        let changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        let changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(
            changeTodoPositionInput.valueAsNumber,
            changeTodoTextInput.value
        );
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted() {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll() {
        todoList.toggleAll();
        view.displayTodos();
    }
};


const view = {
    displayTodos() {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        todoList.todos.forEach(function (todo, position) {
            let todoLi = document.createElement('li');
            let todoTextWithCompletion = '';

            if (todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( )' + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);

        }, this);
    },
    createDeleteButton() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners() {
        let todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function (event) {
            let elementClicked = event.target;
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();