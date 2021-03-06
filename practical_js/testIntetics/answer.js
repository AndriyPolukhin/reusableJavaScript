// 1. Should contian all of the prime numbers (2,3,5,7) that are devivde by itself and 1
// 2. Should containe all the numbers in the range of 10000 - 99999
// 3. Should multiply numbers between each other and store the reuslt
// 4. Should filter the number by palindrome function
// 5. Should store palindromes and should sort palindromes in order to return the largest.

/*
    1. The largest Pallindrome number is  is 999949999.
    2. First Multiplier:33211 Seconde Multiplier: 30109

*/

// 1. Initialte the array to store numbers and variables
// =====================================================

let numArray = []; // number Array
let multiplied; // support array
let filtered; // support array

// number holders
let answer;
let firstMultiplier;
let secondMultiplier;


// MAIN Function

const runProgram = function () {

    addPrimeNumbersIntoArray();

    multiplied = multiplyArrayItemsBetweenEachOther(numArray, numArray);

    filtered = filterOutNonPalindromes(multiplied);

    answer = largestPalindrome(filtered);

    console.log(`Answer is ${answer} and it's a multiple of ${firstMultiplier} and ${secondMultiplier}`);

    return answer;
}

// 2 Create a function to populate the numArray
// ====================================================================
function addPrimeNumbersIntoArray() {
    for (let i = 10000; i < 99999; i++) {
        if (checkForPrimeNumber(i) !== false) {
            numArray.push(i);
        }
    }
}

// 3. Create a function to check for a Prime Number
// ====================================================================
function checkForPrimeNumber(number) {
    if (number <= 1) {
        return false;
    } else {
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return number;
    }
}

// 4. Create a function to multiply the last array item on arrayItems
// ====================================================================
function multiplyArrayItemsBetweenEachOther(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = [];
        for (let y = 0; y < arr2.length; y++) {
            newArr[i][y] = arr1[i] * arr2[y];
            if (newArr[i][y] === 999949999) {
                firstMulitiplier = arr1[i];
                secondMultiplier = arr2[y];
            }
        }
    }
    return newArr;
}

// 5. Create a function to filter NoN Palindromes
// ====================================================================
function filterOutNonPalindromes(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let y = 0; y < arr[i].length; y++) {
            let reversed = parseInt(
                arr[i][y]
                .toString()
                .split('')
                .reverse()
                .join('')
            );
            if (arr[i][y] === reversed) {
                newArr.push(arr[i][y]);
            }
        }
    }
    return newArr;
}

// 6. Funciton to get the largest palindrome number
// ====================================================================
function largestPalindrome(numArray) {
    let largestNumber = Math.max.apply(null, numArray);
    return largestNumber;
}

// Run the programm.
// ====================================================================
runProgram();