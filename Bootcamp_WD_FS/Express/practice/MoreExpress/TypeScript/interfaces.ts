// WORKING WITH INTERFACES
/*
// BASIC EXAMPLE
function showTodo(todo: {title: string, text: string}) {
    console.log(todo.title + ":" + todo.text);
}

let myTodo = {title: "Sugar", text: "Kiss Sugar"}
*/
// showTodo(myTodo);

interface Todo {
    title: string;
    text: string;
}

function showTodo(todo: Todo) {
    console.log(todo.title + " : " + todo.text);
}

let myTodo = {title: 'Anastasia', text: 'Kiss Sugar'}

showTodo(myTodo);