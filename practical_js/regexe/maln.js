
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";


let a = longHand.test(numbers);
let b = shortHand.test(numbers);
let c = longHand.test(varNames);
let d = shortHand.test(varNames);

console.log(a,b,c,d);

let quoteSample = "The five boxing wizards jump quickly";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);

let shortHands = /\W/;
let numberss = "42%";
let sentence = "Coding!";

let x = numberss.match(shortHands);
let y = sentence.match(shortHands);

console.log(x,y);

let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result2 = quoteSample2.match(nonAlphabetRegex).length;

console.log(result2);




