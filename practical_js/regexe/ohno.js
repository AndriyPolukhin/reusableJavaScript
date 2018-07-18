
let ohStr = "Ohhh no";

let ohRegex = /\w(h{2,6})\w+/i;

let result = ohRegex.test(ohStr);

let ans = ohStr.match(ohStr);

console.log(ans);

console.log(result);
