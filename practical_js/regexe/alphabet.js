let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;

catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

console.log(result);

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
let ans = jennyStr.match(myRegex);

console.log(ans);

let quoteSample2 = "Blueberrry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi;
let results = quoteSample2.match(myRegex2);

let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/gi;
let resulting = quoteSample3.match(myRegex3);
console.log(resulting);




