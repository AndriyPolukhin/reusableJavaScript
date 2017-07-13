// Confirm the Ending

/*
=================================
        My Answer
=================================
*/



function confirmEnding(str, target) {
    var check = str.substring(str.length - target.length);
    return (check === target) ? true : false;
}
confirmEnding('Bastian', 'n');


/*
=================================
       Testing
=================================
*/


var str = "Bastian";
var target = 'n';
var check = str.substring(str.length - target.length);
if (check === target) {
    true;
}



// Two ways to confirm the ending of a String in JavaScript

// I.  Approach #1: Confirm the Ending of a String With Built-In Functions — with substr();

function confirmEnding(string, target) {
    // Step 1. Use the substr method
    if (string.substring(-target.length) === target) {
        // The string is 'Bastian' and the target is 'n'
        // target.length = 1 so -target.length = -1
        // if ('Bastian'.substr(01) === 'n')
        // if ('n' === 'n')

        // Step 2. Return a boolean ( true or false)
        return true;
    } else {
        return false;
    }
}
confirmEnding('Bastian', 'n');

// Short:
function confirmEnding(string, target) {
    if (string.substr(-target.length) === target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding('I kissed her in the shower once. her name was Anastasia', 'Anastasia');

// Ternary operator
function confirmEnding(string, target) {
    return (string.substr(-target.length) === target) ? true : false;
}


confirmEnding('I kissed her in the shower once. her name was Anastasia', 'Anastasia');


// regfactored code just to return the boolean

function confirmEnding(string, target) {
    return string.substr(-target.length) === target;
}
confirmEnding('I kissed her in the shower once. her name was Anastasia', 'Anastasia');

/*
(string.substr(-target.length) === target) ? true : false;
*/


confirmEnding('Bastian', 'n');


// II. Approach #2: Confirm the Ending of a String With Built-In Functions — with endsWith();

function confirmEnding(string, target) {
    // We return the method with the target as a parameter
    // The result will be a boolean (true/false)
    return string.endWith(target);
    // 'BASTIAN'.endWith("N");
}

confirmEnding('BASTINA', "N");
