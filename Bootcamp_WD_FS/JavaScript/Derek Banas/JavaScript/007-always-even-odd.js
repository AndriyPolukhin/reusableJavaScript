/**
  This algorithm checks if the sum of all even numbers always returns an even number, and that the sum of 2 odd numbers always returns an even number, but more then 2 number return even or odd.
  even + even = even
  even + odd = odd
  odd + odd = even
  even - even = even
  even - odd = odd
  odd - odd = even
  even * even = even
  even * odd = even
  odd * odd = odd
*/

/*
A pattern I noticed when using more then two arguments is that if you have all odd numbers with an even number of arguments the results in an even sum.  For example:
isSumEvenOrOdd(7, 11, 13, 17, 47, 111) returns 206,
The same is true with an odd number of arguments, results in an odd sum.
isSumEvenOrOdd(7, 11, 13, 17, 47) returns 95.
*/

// passes isSumEven || isSumOdd returns the sum and if even or odd.

const sumNums = (obj) => {
    const result = {
        error: null,
        allEven: false,
        allOdd: false,
        mixed: false,
        sum: null,
    }

    const sumUpNumbers = (arr) => {
        let num = 0;

        for (let i = 0; i < arr.length; i++) {
            num = num + arr[i];
        }
        return num;
    }

if(obj.even.length > 0 && obj.odd.length === 0) {
    result.sum = sumUpNumbers(obj['even']);
    result.allEven = true;
} else if(obj.odd.length > 0 && obj.even.length === 0) {
    result.sum = sumUpNumbers(obj['odd']);
    result.allOdd = true;

    if (result.sum % 2 === 0) {
        result.error = 'ERROR: All inputs were odd but the final result was even.';
    }
} else if (obj.even.length === 0 && obj.odd.length === 0) {
    result.error = 'Please input at least two numbers.';
} else {
    result.sum = sumUpNumbers(obj['even']) + sumUpNumbers(obj['odd']);
    result.mixed = true;
}
    return result;

}

// create object with arrays of even and odd numbers

const isSumEvenOrOdd = (...args) => {
    const even = [];
    const odd = [];
    const nums = {
        even,
        odd
    };

    for ( let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) {
            even.push(args[i]);
        } else {
            odd.push(args[i]);
        }
    }
    return sumNums(nums);
}

console.log(isSumEvenOrOdd(2, 8, 10, 102));