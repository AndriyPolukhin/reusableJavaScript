let str = "Hello, world".match(/Hello/);

console.log(str);


let ourStr = "Regualr expressions";
let ourRegex = /expressions/;
let result = ourStr.match(ourRegex);

console.log(result);


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let results = extractStr.match(codingRegex);
console.log(results);
