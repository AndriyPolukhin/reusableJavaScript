// Position lookahead (?=...);
// Negative lookahead (?!...);
//


let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /g(?!u)/;

let a = quit.match(quRegex);
let b = noquit.match(qRegex);

//console.log(a);
//console.log(b);
//

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

//console.log(checkPass.test(password));


let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d\d)/;
let result = pwRegex.test(sampleWord);
console.log(result);








