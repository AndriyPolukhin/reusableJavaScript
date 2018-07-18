let soccerWord = "goooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;


let c = soccerWord.match(goRegex);
let a = gPhrase.match(goRegex);
let b = oPhrase.match(goRegex);

console.log(c,a,b);

let chewieQuote = "Aaaaaaaaaaaaaarrrgh!";
let chewieRegex = /^[' ']a*/gi;
let result = chewieQuote.match(chewieRegex);

console.log(result);

let chewieQuote = "Aaaaaaaaaaaaaaarrrgh!";
elt chewieRegex = /a*a+/gi;
let result = chewieQuote.match(chewieRegex);
