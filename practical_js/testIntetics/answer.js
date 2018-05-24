// 1. Should contian all of the simple numbers (2,3,5,7) that are devivde by itself and 1
// 2. Should containe all the numbers in the range of 10000 - 99999
// 3. Should multiply numbers between each other and store the reuslt
// 4. Should filter the number by palindrome function
// 5. Should store palindromes and should sort palindromes

/*
    1. The biggest Prime number in 5 digits is 99991.
    2.

*/

// 1. Initialte the array to store numbers and variables
let numArray = [];
let answer;
let base;
let multiplier;
let multiplied;
let filtered;

// MAIN Function

const run = function() {
    addSimpleNumbers();

    multiplied = multiplyArrayItems2(numArray, numArray);
    filtered = filterNoNPalindromes(multiplied);
    answer = getMaxOfArray(filtered);

    multiplier = answer / base;
    console.log(`Answer is ${answer} and it's a multiple of ${base} and ${multiplier}`);
    return answer;
}

// 2 Create a function to populate the numArray
function addSimpleNumbers() {
    for(let i = 10000; i < 99999; i++) {
        if (isPrime(i) !== false) {
            numArray.push(i);
        }
    }
}
// 3. Create a function to check for a Prime Number
function isPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num;
    }
}

// 4. Create a function to multiply the last array item on arrayItems
/*
function multiplyArrayItems(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = [];
        for(let y = 0; y < i; y++) {
            newArr[i].push(arr[i] * arr[y]);
        }

        base = arr[i];
    }
    return newArr;
}
*/

const array = [2345, 1221, 45654, 34];
function multiplyArrayItems2(arr1, arr2) {
    let newArr = [];
    for(let i = 0; i < arr1.length; i++) {
        newArr[i] = [];
        for(let y = 0; y < arr2.length; y++) {

            newArr[i][y] = arr1[i]*arr2[y];

        }
    }
    console.table(newArr);
    return newArr;
}




// 5. Create a function to filter NoN Palindromes

function filterNoNPalindromes(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let reversed = parseInt(arr[i].toString().split('').reverse().join(''));
        if(arr[i] === reversed) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}



// 6. Funciton to get the max number
function getMaxOfArray(numArray) {
    let largestNumber = Math.max.apply(null, numArray);
    return largestNumber;
}

// Run the programm.
run();

