/*
Math.max(1, 10) //returns 10
Math.max(-100, 10) //returns 10

Using apply as part of the method call can define scope of the array.
var myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Math.max.apply(null, myArray); //returns 9
This would give you the same result:
Math.max.apply(this, myArray); //returns 9

Math.max.apply(myArray) //returns –Infinity
Math.max(myArray) //Returns NaN



// Reverser Number
var numSequece = 1234;
var reversedNumbers = parseInt(numSequece.toString().split('').reverse().join(''));

console.log(typeof reversedNumbers);

*/

var isPalindrome = function (number) {
    var numberAux = number;
    var reversedNumber = 0;

    while (numberAux > 0) {
        var rightDigit = Math.floor(numberAux % 10);
        reversedNumber = reversedNumber * 10 + rightDigit;
        numberAux = Math.floor(numberAux / 10);
    }

    if (number === reversedNumber) {
        return true;
    } else {
        return false;
    }
}

var numri = window.prompt("Vendosni numrin");
if (numri === numri.split("").reverse().join(""))
    alert("Number palindrome");
else
    alert("Number not palindrome");