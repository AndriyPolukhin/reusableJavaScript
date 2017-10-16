// SELECT THE PROPERTY
var body = document.querySelector("body");

// Set the main variable to false
var isBlue = false;

// Write a function that MANIPULATES the BG_COLOR

setInterval(function () {
    if (isBlue) {
        body.style.background = "white";
    } else {
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);
