// Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString('hello');
reverseString('Greetings from Earth');

// Three more ways to do it!

// I. Reverse a string with a Buil-In Function

//    Using
// 1. String.prototype.split();
// 2. Array.prototype.reverse();
// 3. Array.prototype.join();


function reverseString(str) {

    // Step 1. Use the split() method to return a new array
    var splitString = str.split('');
    // var splitString = 'hello'.split('');
    // ['h','e','l','l','o'];

    // Step 2. use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse();
    // var reverseArray = ['h','e','l','l','o'].reverse();
    // ['o','l','l','e','h'];

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join('');
    // var joinArray = ['o','l','l','e','h'].join('');
    // 'ollen'

    // Step 4. Return the reversed string
    return joinArray;
    // 'ollen'
}

reverseString('hello');

// Chaining into one line
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString('hello');

// II. Reverse a String With a Decrementing For Loop

function reverseString(str) {

    // Step 1. Create an empty string that will host the new created string
    var newString = '';

    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the
      last character of the string, "o"
      As long as i is greater than or equals 0, the loop will go on
      We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
        // or newString = newStirng + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/

    // Step 3. Return the reversed string
    return newString;
    // 'olleh'
}

reverseString('hello');


function reverseString(str) {
    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

reverseString('hello');


// III. Reverse a String With Recursion
// Using
// 1.   String.prototype.substr();
// 2.   String.prototype.charAt();

function reverseString(str) {
    if (str === '')
        // This is the terminal case that will end the recursion
        return '';

    else
        return reverseString(str.substr(1)) + str.charAt(0);

    /*
First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls
Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"
Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately
5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
*/

}

reverseString('hello');


function reverseString(str) {
    if (str === '')
        return '';
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

reverseString('hello');


function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString('hello');
