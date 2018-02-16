var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");

    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }

});


resetButton.addEventListener("click", function() {
    // all new color
    colors = generateRandomColors(6);
    // pick a new color from array
    pickedColor = pickColor();
    // change color display to mathc the Display color
    colorDisplay.textContent = pickedColor;
    // display new colors on squares
    for(var i = 0; i < squares.length; i++)
    {squares[i].style.background = colors[i];}
    resetButton.textContent = "New Colors";
    h1.style.background = "#232323";
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    // add initial color to sqaures
    squares[i].style.background = colors[i];

    // add event listeners to squares
    squares[i].addEventListener("click", function() {
        // grabb the color clicked
        var clickedColor = this.style.background;
        // compare color to picked Color
        console.log(clickedColor ,pickedColor);
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again";
        } else {
           this.style.background = "#232323";
           messageDisplay.textContent = "Try Again";
        }
    });
}     

function changeColors(color) {
    // loop throug all the squares
    for(var i = 0; i < squares.length; i++)
    { // change all the colors
        squares[i].style.background = color;}
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num colors to array
    for(var i = 0; i < num; i++){
        // get random color and push into an array
        arr.push(randomColor());
    }
    // return an array
    return arr;
}

function randomColor(){
    // pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    // picj a blue form 0-255
    var b = Math.floor(Math.random() * 256);
    // return a color to the functoin generate
    return "rgb(" + r + ", " + g + ", " + b + ")";
}