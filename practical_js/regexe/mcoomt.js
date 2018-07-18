let difficultSpelling = "Mississippi";
let myRegex = /ss+/gi;
let result = difficultSpelling.match(myRegex);

console.log(result);
