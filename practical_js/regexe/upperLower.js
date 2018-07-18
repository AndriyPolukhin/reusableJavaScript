let ohStr = "Ohh no";
let ohRegex = /(oh{3,6}\sno$)/i;
let result = ohRegex.test(ohStr);

let haStr = "Hazzzzah";
let haRegex = /z{4,}/;
let results = haRegex.test(haStr);

let timStr = "Timmmmber";
let timRegex = /Tim4}ber/;
let resultts = timRegex.test(timStr);
