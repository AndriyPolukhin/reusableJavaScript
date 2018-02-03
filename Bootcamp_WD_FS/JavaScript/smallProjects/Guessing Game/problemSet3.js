/*Problem set 3*/


/*
I. Assignment 1
Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

*/

function isEven(num) {
    //return true if even
    if (num % 2 === 0) {
        return true;
    }
    //return false if otherwise
    else {

        return false;
    }

    // second solution is
    // return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(3));


function isEven2(num) {
    return num % 2 === 0;
}

/*
II. Assignment 2

write a function factorial() which takes a single numeric argument and returns the factorial of that number

*/

function factorial(num) {
    if (num < 0) {
        return -1;
    } else if (num === 0) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

factorial(5);

function factorialize(num) {
    //define a result variable
    var result = 1;
    //calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    //return the result
    return result;

    /*
    backwards to the lowest number is made in the following way
        if(num === 0) {
        return 1;
        }
        var result = num;
        for(var i = num - 1; i >= 1; i--) {
        result *= i;
        } return result;    
    */
}

factorialize(5);

/*
III. Assignment 3

kebabToSname()
white a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.

*/


/*
function kebabToSnake(str) {
    // replace all '-' with "_"s
    var newStr = str.replace(/-/g, "_");
    // return str
    return newStr;
}
kebabToSnake("hello-there");
*/

function kebabToSnake(str) {

    // replace all '-' with "_"s
    var newStr = str.replace(/-/g, "_");
    // return str
    return newStr;
}
