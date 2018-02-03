var answer = prompt("Are we threre yet?");

while (answer !== "yes" && answer !== "yeah") {
    var answer = prompt("Are we there yet?");
}

alert("YAY, We made it!");

var answer2 = prompt("Are we leaving soon?");

while (answer2.indexOf("yes") === -1) {
    var answer2 = prompt("Are we leaving soon?");
}

alert("YAY, We're finally on the move");
