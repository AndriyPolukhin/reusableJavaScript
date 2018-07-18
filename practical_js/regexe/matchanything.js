let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex);
hugStr.match(huRegex);

let exampleStr = "Let's have fun with regular expressions";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
console.log(result);
