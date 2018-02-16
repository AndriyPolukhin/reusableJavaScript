// THE COLOR GAME INTERACTIVE FUNCTIONS HERE
// 1. NUMERIC VALUES
var numSquares = 6;
var colors = [];
var pickedColor;

// 2. DOM SELECTORS
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


// 3. INIT FUNCTION FOR BASE PARAMETERS CALL
init();
function init() {
    // MODE BUTTON LISTENERS
    setupModeButtons();
    // END OF MODE BUTTON LISTENERS
    // CHANGE COLOR DISPLAY
    setupSquares(); 
    // END OF THE COLOR DISPLAY
    // RUN RESET ONE MORE TIME
    reset();
    // END OF THE RESET() CALL
}

// 3.1 SETUP MODE BUTTONS FUNCTION
function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // if(this.textContent === "Easy") { numSquares = 3;} else {numSquares = 6;}
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

// 3.2 SETUP SQUARE LISTENERS FUNCTION
function setupSquares() {
     for (let i = 0; i < squares.length; i++) {
         squares[i].style.background = colors[i];
         squares[i].addEventListener("click", function () {
             var clickedColor = this.style.background;
             if (clickedColor === pickedColor) {
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
}


// 3.3 RESET FUNCTION FOR THE REFRESHING THE PARAMETERS TO THE BEGINING
resetButton.addEventListener("click", function () {
    reset();
});
function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    h1.style.background = "steelblue";
    for(var i = 0; i < squares.length; i++){
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
           squares[i].style.display = "none";
        }}
}
   
// 4. COLOR FUNCTIONS (CHANGERS / PICKERS / GENERATORS / RANDOMIZERS)
function changeColors(color) {
    for(var i = 0; i < squares.length; i++)
    { squares[i].style.background = color;}}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    var arr = [];
    for(var i = 0; i < num; i++){arr.push(randomColor());}
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}