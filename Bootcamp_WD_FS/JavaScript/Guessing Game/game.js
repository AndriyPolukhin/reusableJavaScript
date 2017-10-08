// Create a secretNumber
var secretNumber = 4;
//Ask user for a guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//Check the guesss
if (guess === secretNumber) {
    alert("this is right!");
} else if (guess > secretNumber) {
    alert("Too high");
} else if (guess < secretNumber) {
    alert("To low");
}
