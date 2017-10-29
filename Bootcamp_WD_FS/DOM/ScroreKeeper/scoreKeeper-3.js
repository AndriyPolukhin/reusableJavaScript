var buttonP1 = document.getElementById("p1");
var buttonP2 = document.getElementById("p2");
var buttonReset = document.getElementById("reset");
var displayP1 = document.getElementById("displayP1");
var displayP2 = document.getElementById("displayP2");
var p1Score = 0;
var p2Score = 0;
var inputNumber = document.querySelector('input');
var displayWinningScore = document.querySelector('h2 span');
var gameOver = false;
var winningScore = 5;

buttonP1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;

        if (p1Score === winningScore) {
            displayP1.classList.add('winner');
            gameOver = true;
        }

        displayP1.textContent = p1Score;
    }
});

buttonP2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;

        if (p2Score === winningScore) {
            displayP2.classList.add('winner');
            gameOver = true;
        }
        displayP2.textContent = p2Score;
    }
});


buttonReset.addEventListener("click", reset);

function reset() {
    p1Score = 0;
    p2Score = 0;
    displayP1.textContent = 0;
    displayP2.textContent = 0;
    displayP1.classList.remove('winner');
    displayP2.classList.remove('winner');
    winningScore = 5;
    displayWinningScore.textContent = winningScore;
    inputNumber.value = '';
    gameOver = false;
}


inputNumber.addEventListener("change", function () {
    winningScore = Number(this.value);
    displayWinningScore.textContent = this.value;

});
