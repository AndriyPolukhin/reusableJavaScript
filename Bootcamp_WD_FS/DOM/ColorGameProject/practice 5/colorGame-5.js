/* --------------------VARIABLES --------------*/
var numSquares = 6; 
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

/*--------------- EVENT LISTENERS----------------*/
resetButton.addEventListener("click", function() {
   reset();
});
/* ---------------- FUNCTIONS ------------------*/
function setUpModeButtons() {
    /* ----------------- MODE BUTTONS REFACTORING ---------------*/
    for(var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected"); 
        modeButtons[2].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : (this.textContent === "Hard" ? numSquares = 6 : numSquares = 9);
        reset();
        });
    }
}

function setUpSquares() {
     /* ----------------- LOOPS ---------------*/
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function(){
            var clickedColor = this.style.background;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}
}

function changeColors(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length );
    return colors[random];
}
function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++){ 
        arr.push(randomColor());
    }
    return arr; 
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b +  ")";
}
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.background = "steelblue";
    for(var i = 0; i < squares.length; i++){ 
        (colors[i]) ? squares[i].style.display = "block" : ""; 
        (colors[i]) ? squares[i].style.background = colors[i] : squares[i].style.display = "none";
    }
}