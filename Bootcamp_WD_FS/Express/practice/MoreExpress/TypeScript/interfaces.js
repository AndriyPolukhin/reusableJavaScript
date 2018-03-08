// WORKING WITH INTERFACES
/*
// BASIC EXAMPLE
function showTodo(todo: {title: string, text: string}) {
    console.log(todo.title + ":" + todo.text);
}

let myTodo = {title: "Sugar", text: "Kiss Sugar"}
*/
// showTodo(myTodo);
function showTodo(todo) {
    console.log(todo.title + " : " + todo.text);
}
var myTodo = { title: 'Anastasia', text: 'Kiss Sugar' };
showTodo(myTodo);
