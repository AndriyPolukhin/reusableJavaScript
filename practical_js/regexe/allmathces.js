let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// returns ["Repeat"];


let repeatRegex = /Repeat/g;
let answer = testStr.match(repeatRegex);

// Return ["Repeat", "Repeat", "Repeat"];

console.log(answer);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

console.log(result);

