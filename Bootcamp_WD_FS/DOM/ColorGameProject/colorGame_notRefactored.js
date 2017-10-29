// The app is progressevly designed
// First the skeleton from basic functionality
// Then it will be re-factored to a harder logic
// Do not do it in the final way right away
// the app needs to be created ste-by-step
// by progressing slovly you can achive more
// Simplicity


// Initiate colors before Randomizing
/*var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];*/

// a varable to track the mode easy/hard
var numSquares = 6;
// Write a function to set var colors of 6
var colors = generateRandomColors(numSquares);

//Select the html div's with colors by class name
var squares = document.querySelectorAll('.square');
// set a random color with a function pickedColor()
var pickedColor = pickColor();
// select a html tag where the color to be displayed
var colorDisplay = document.getElementById("colorDisplay");
// display the color
colorDisplay.textContent = pickedColor;
// select a html tag with message id
var messageDisplay = document.querySelector('#message');
// select the h1 in order to change the bg color
var h1 = document.querySelector('h1');
// select a reset button
var resetButton = document.querySelector("#reset");
// select the easyBtn
var easyBtn = document.querySelector("#easyBtn");
// select the hardbtn
var hardBtn = document.querySelector("#hardBtn");



// toggle the class for the bg of the button
easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    // Loop to add new colors and to hide div's
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            // change the color of the 3 div's
            squares[i].style.background = colors[i];
        } else {
            // hide the last 3 div's
            squares[i].style.display = 'none';
        }
    }
});

// toggle the class for the bg of the button
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    // Loop to add new colors and to hide div's
    for (let i = 0; i < squares.length; i++) {
        // all new colors
        squares[i].style.background = colors[i];
        // display block
        squares[i].style.display = 'block';

    }
});



resetButton.addEventListener('click', function () {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // live the resetButton messagte the same
    this.textContent = "New Colors";
    // change message display message
    messageDisplay.textContent = "";
    // change the colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    // return the original bg-color for the header
    h1.style.background = "steelblue";
});

// Loopiing to add functionality to squares
for (let i = 0; i < squares.length; i++) {
    //Selector: add initial colors to squares
    squares[i].style.background = colors[i];

    //Function: add click listeners ot squares
    squares[i].addEventListener('click', function () {
        //Select: grab color of clicked squre
        let clickedColor = this.style.background;
        //Logic: compare color to pickedColor
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            // Logic: displaying the message correct
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play again";
            changeColors(clickedColor);
            // The header background is changed too
            h1.style.background = clickedColor;
        } else {
            // Adding style of the background
            this.style.background = "#232323";
            // displaying the message Try Again
            messageDisplay.textContent = "Try Again";
        }
    });
}

// Function: separate the code to simplify
function changeColors(color) {
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.background = color;
    }

}

// here we would neexd to pick a random color and return it to the array
//Function matches the variable that we use
function pickColor() {
    // Set a function for random and flooring
    let random = Math.floor(Math.random() * colors.length);
    // function returb the color
    return colors[random];
}

// Create a function for generating colors
function generateRandomColors(num) {
    // make an array
    let arr = [];
    // add num random colors to the array
    // repeat num times
    for (let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array

    return arr;

}

// Structure. Creating a function for random color
function randomColor() {
    // pick a 'red' from 0-255
    let r = Math.floor(Math.random() * 256);
    // pick a 'green from 0-255
    let g = Math.floor(Math.random() * 256);
    // pick a 'blue' from 0-255
    let b = Math.floor(Math.random() * 256);
    // create a return string
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
