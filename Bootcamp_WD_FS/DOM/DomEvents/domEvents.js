/*
THe PROCESS

Listen for a click on thes <button>

Listen for a hover event on the <h1>

Listen for a keypress event on text input

*/

/*

MAIN METHOD is addEventListener

element.addEventListener(type, functionToCall);

var button = document.querySelector("button");
    button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON!");
});

*/

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// SETUP CLICK LISTENER
button.addEventListener("click", function () {
    paragraph.textContent = "Some one Clicked the button";
});


// ALTERNATIVE

button.addEventListener("click", changeText);

function changeText() {
    paragraph.textContent = "Some one made the function external";
}
