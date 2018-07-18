let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;

let a = repeatRegex.test(repeatStr);
let b = repeatStr.match(repeatRegex);

//console.log(a);
//console.log(b);
//

let repeatNum = "42 42 42";
let reRegex = /(\s?\d\d?\s?\d?)\1/;
let result = reRegex.test(repeatNum);
let string = repeatNum.match(reRegex);

console.log(result);
console.log(string);
