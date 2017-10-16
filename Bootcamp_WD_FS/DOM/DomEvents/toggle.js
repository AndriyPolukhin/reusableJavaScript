/*// SOLUTION # 1

// Select the button
var button = document.querySelector("button");
// Set the boolean to false
var isPurple = false;

// write add an EventListener
button.addEventListener("click", function () {
    // Add Logic.
    if (isPurple) {
        // Call for the white color
        document.body.style.background = "white";

    } else {
        // call for a purple color
        document.body.style.background = "purple";

    }
    // change the boolean from true to false and backwards
    isPurple = !isPurple;

});*/


// SOLUTION # 2 USING A STYLE AND A classList toggle!!!!

var button = document.querySelector("button");

button.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});
