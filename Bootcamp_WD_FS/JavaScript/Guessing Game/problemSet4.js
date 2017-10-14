/*

Assignment I.

printReverse()

Write a function printReverse() that takes an array as an argument
and prints out hte elements in the array in reverse order(don't
actually reverse the array itself)

printReverse([1,2,3,4]);
//4
//3
//2
//1

printReverse(["a", "b", "c",]);
//"c"
//"b"
//"a"

*/

function printReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log("Here is the array data printed in reverse: " + arr[i]);
    }
}

console.log("Here I will see the numbers: " + printReverse([1, 2, 3, 4]));
console.log("Here I will see the letters: " + printReverse(["a", "b", "c"]));


/*

Assignment II.

isUniform()

write a function isUniform() which takes an array as an argument
and returns true if all elements in the array are identical

isUniform([1,1,1,1]);             // true
isUniform([2,1,1,1]);            // false
isUniform(["a", "b", "p"]);     // false
isUniform(["b","b","b"]);       // true

*/


function isUniform(arr) {
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === arr[i]) {
            result = true;
        } else {
            result = false;
        }

    }
    return result;
}

console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b"]));



/*

Assignment III.

sumArray()

Write a function sumArray() that accepts an array of numbers and 
returns the sum of all numbers in the array

sumArray([1,2,3]);  // 6
sumArray([10,3,10,4]); // 27
sumArray([-5, 100]);  //95

*/

function sumArray(arr) {
    let sum = 0;
    arr.forEach(function (number) {
        sum = sum + number;
    });
    return sum;
}



console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));



/*

Assignment IV.

max()

Write a function max() that accepts an array of numbers and 
returns the maximum number in the array

max([1,2,3]);       // 3
max([10,3,10,4]);   // 10
max([-5, 100]);     // 100

*/

function max(arr) {

    let result = 0;

    arr.forEach(function (number) {
        if (number > result) {
            result = number;
        }
    });

    return result;

}

console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));
