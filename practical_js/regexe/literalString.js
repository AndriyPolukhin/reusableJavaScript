// RE: Match Literal Strings
//

let testStr = "Hello, my name is Kevim.";
let testRegex = /Kevin/;
testRegex.test(testStr);

let waldoIsHiding = "Somewhere Waldo is hiding in the text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

console.log(result);


let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let results = petRegex.test(petString);

console.log(results);

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let resultt = fccRegex.test(myString);
console.log(resultt);

