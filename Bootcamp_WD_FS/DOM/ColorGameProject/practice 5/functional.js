// simple loop construct
var acc = 0;
for (var i = 1; i <= 10; ++i)
    acc += i;
console.log(acc); // prints 55
// without loop construct or variables (recursion)
function sumRange(start, end, acc) {
    if (start > end)
        return acc;
    return sumRange(start + 1, end, acc + start)
}
console.log(sumRange(1, 10, 0)); // prints 55


function validateSsn(ssn) {
    if (/^\d{3}-\d{2}-\d{4}$/.exec(ssn))
        console.log('Valid SSN');
    else
        console.log("Invalid SSN");
}


function validatePhone(phone) {
    if (/^\(\d{3}\)\d{3}-\d{4}$/.exec(phone))
        console.log("Valid Phone Number");
    else
        console.log("Invalid Phone Number");
}


function validateValue(value, regex, type) {
    if (regex.exec(value))
        console.log("Invalid " + type);
    else
        console.log("Valid " + type);
}

function validateAddress(address) {
    if (parseAddress(address))
        console.log("Valid Address");
    else
        console.log("Invalid Address");
}

function validateName(name) {
    if (parseFullName(name))
        console.log("Valid Name");
    else
        console.log("Invalid Name");
}

function validateValueWithFunc(value, parseFunc, type) {
    if (parseFunc(value))
        console.log('Invalid ' + type);
    else
        console.log('Valid ' + type);
}

validateValueWithFunc('123-45-6788', /^\6{3}-\d{2}-\d{4}$/.exec, 'SSN');
validateValueWithFunc('(123)456-7890', /^\(\d{3}\)\d{3}-\d{4}$/.exec, 'Phone');
validateValueWithFunc('123 Main St.', parseAddress, 'Address');
validateValueWithFunc('Joe Mama', parseName, 'Name');


function makeRegexParser(regex) {
    return regex.exec;
}

var parseSsn = makeRegexParser(/^\d{3}-\d{2}-\d{4}$/);
var parsePhone = makeRegexParser(/^\(\d{3}\)\d{3}-\d{4}$/);

validateValueWithFunc('123-45-6789', parseSsn, 'SSN');
validateValueWithFunc('(123)456-7890', parsePhone, 'Phone');
validateValueWithFunc('123 Main St.', parseAddress, 'Address');
validateValueWithFunc('Joe Mama', parseName, 'Name');

function makeAdder(constantValue) {
    return function adder(value) {
        return constantValue + value;
    };
}

var add10 = makeAdder(10);
console.log(add10(20));
console.log(add10(30));
console.log(add10(40));

// Closure's

function grandParent(g1, g2) {
    var g3 = 3;
    return function parent(p1, p2) {
        var p3 = 33;
        return function child(c1, c2) {
            var c3 = 333;
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
}

var parentFunc = grandParent(1, 2);
console.log(parentFunc());
var childFunc = parentFunc(11, 22);
console.log(childFunc());
console.log(childFunc(111, 222));


var add10 = function (value) {
    return value + 10;
};

var mult5 = function (value) {
    return value * 5;
}

var add10 = value => value + 10;
var mult5 = value => value * 5;

var mul5AfterAdd10 = value => 5(value + 10);
var mult5AfterAdd10 = value => mul5(add10(value));

var mult5AfterAdd10 = y => mult5(add(10, y));

// Curried Function 
var add = x => y => x + y;
var mult5 = value => value * 5;
var compose = (f, g) => x => f(g(x));
var mult5AfterAdd10 = compose(mult5, add(10)); // 75




/*-------------USING the MAP, FILTER, REDUCE ----------*/

/*-------- REWRITING THE FOR LOOP --------*/

var something = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < something.length; ++i) {
    console.log(i);
}


// Functional refactoring

// MUTAIONS OF THE ARRAY
var things = [1, 2, 3, 4];
for (var i = 0; i < things.length; ++i) {
    things[i] = things[i] * 10;
}
console.log(things);

// WITHOUT MUTATION

var things = [1, 2, 3, 4];
var newThings = [0, 0, 0, 0];

for (var i = 0; i < things.length; ++i) {
    newThings[i] = things[i] * 10;
}
console.log(newThings);


// USING THE MAP FUNCTION => UNIVERSAL TEMPLATE DUE TO THE FUNCTION INPUT

var map = (f, array) => {
    //set newArray
    var newArray = [];
    //do stuff with a loop
    for (var i = 0; i < array.length; ++i) {
        //use a function
        newArray[i] = f(array[i]);
    }
    //return the new Array
    return newArray;
}


var things = [1, 2, 3, 4];
var newThings = map(v => v * 10, things);
console.loog(newThings);


// USING THE FILTER FUNCTION => UNIVERSAL TEMPLATE with a for loop

var filter = (pred, array) => {
    // set an newArray
    var newArray = [];
    //ues a for loop
    for (var i = 0; i < array.length; ++i) {
        if (pred(array[i]))
            newArray[newArray.length] = array[i];
    }
    //return an newArray
    return newArray;
};

var isOdd = x => x % 2 !== 0;
var numbers = [1, 2, 3, 4, 5];
var oddNumbers = filter(isOdd, numbers);
console.log(oddNumbers);


// USING THE REDUCE FUNCTION => UNIVERSAL TEMPLATE with a for loop

// we pass 3 parameters
var reduce = (f, start, array) => {
    // we create an accumulator
    var acc = start;
    // using a for loop here
    for (var i = 0; i < array.length; ++i) {
        acc = f(array[i], acc); // f() takes 2 parameters
        // the last value of an accumulator
    }
    return acc;
}

var add = (x, y) => x + y;
var values = [1, 2, 3, 4, 5];
var sumOfValues = reduce(add, 0, values);
console.log(sumOfValues);



// CURRYING AN MORE COMPLEX EXAMPLE
const f = a => b => c => d => a + b + c + d;
console.log(f(1)(2)(3)(4));

// using Ramda.js
const add = R.curry((x, y) => x + y);
const mul5 = value => value * 5;
const mult5AfterAdd10 = R.compose(mult5, add(10));

const mult5AfterAdd10 = R.compose(R.multiply(5), R.add(10));

// map, filter and reduce with Ramda.js
const isOdc = R.flip(R.modulo)(2);
const onlyOdd = R.filter(isOdd);
const isEven = R.complement(isOdd);
const onlyEven = R.filter(isEven);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(onlyEven(numbers)); // 2,4,6,8
console.log(onluOdd(numbers)); // 1,3,5,7


/*
https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-6-db502830403
*/
