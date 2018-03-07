const _ = require("lodash");

const numbers = [33,56,43,32,3];

_.each(numbers, function(number, i) {
    console.log(number);
});