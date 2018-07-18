
let firstString = "Ricky is first and can be found.";

let firstRegex = /^Ricky/;

let resultOne = firstRegex.test(firstString);

console.log(resultOne);

let notFirst = "You can't find Ricky now.";

let resultTwo = firstRegex.test(notFirst);

console.log(resultTwo);

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

console.log(result);


let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let resultFour = lastRegex.test(caboose);

console.log(resultFour);

