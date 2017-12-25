/* --------------------VARIABLES --------------*/
var numSquares = 6; 
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
    console.log("var pickedColor: " +  pickedColor);
var colorDisplay = document.getElementById("colorDisplay");
    console.log("var colorDisplay: ");
    console.log(colorDisplay);
var messageDisplay = document.querySelector("#message");
    console.log("Message: ")
    console.log(messageDisplay);  
var h1 = document.querySelector("h1");
    console.log(h1.textContent);
var resetButton = document.querySelector("#reset");
    console.log(resetButton);
var easyBtn = document.querySelector("#easyBtn");
    console.log(easyBtn);
var hardBtn = document.querySelector("#hardBtn");
     console.log(hardBtn);

/*--------------- EVENT LISTENERS----------------*/
easyBtn.addEventListener("click", function() {
    console.log("Clicked Easy");
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i]; 
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function() {
    console.log("Clicked Hard");
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){ 
         squares[i].style.background = colors[i];
         squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    console.log("Clicked RESET");
    // generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match the picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    // change the textContent
    this.textContent = "New Colors";
    // changes the color of the background of h1
    h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;
    console.log(pickedColor); 

/* ----------------- LOOPS ---------------*/

for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
    squares[i].style.background = colors[i];
        // add click listeners to squares
    squares[i].addEventListener('click', function(){
        // grab the color of clicked square
        var clickedColor = this.style.background;
        console.log("var clickedColor " + clickedColor);
        console.log(pickedColor, clickedColor);
        // compare color to pickedColor
        if(clickedColor === pickedColor) {
            // console.log("Correct!");
            messageDisplay.textContent = "Correct!";
            // change the Reset Button text
            resetButton.textContent = "Play Again";
            // here we change the colors to a clicked color
            changeColors(clickedColor);
            // change the style of the background when correct
            h1.style.background = clickedColor;
        } else {
            // console.log("Try Again!");
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

/* ---------------- FUNCTIONS ------------------*/

function changeColors(color) {
    // loop throught all square 
    for(var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length );
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to arr
    for(var i = 0; i < num; i++){ 
        // get random color and push into arr
        arr.push(randomColor());
    
    }
    // return that array
    return arr; 
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256); 
    // return the string with numbers  
    return "rgb(" + r + ", " + g + ", " + b +  ")";

}