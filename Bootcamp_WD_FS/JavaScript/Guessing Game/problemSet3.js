/*Problem set 3*/


/*
I. Assignment 1
Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

*/

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(3));


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

/*
III. Assignment 3

kebabToSname()
white a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.

*/


function kebabToSnake(str) {
    var string = str.split("");
    for (var i = 0; i < string.length; i++) {
        if (i === "-") {
            string[i] = "_";
        }
        return string;
    }
    var result = string.join();
    return result;
}

kebabToSnake("hello-there");
