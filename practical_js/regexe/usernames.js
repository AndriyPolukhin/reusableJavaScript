let username = "JackOfAllTrades";
let userCheck = /[^J][A-Za-z]+\d?/i;
let result = userCheck.test(username);

console.log(result);
