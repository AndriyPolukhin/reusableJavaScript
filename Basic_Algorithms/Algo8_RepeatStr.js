// Confirm the Ending

/*
=================================
        My Answer
=================================
*/



function repeatStringNumTimes(str, num) {
    // repeat after me
    if (num < 0)
        return "";

    return str.repeat(num);
}

repeatStringNumTimes("abc", 3);


/*
=================================
        testing!
=================================
*/


// Three ways to repeat a string in JavaScript

// I.   Approach #1: Repeat a String with a While Loop

function repeatStringNumTimes(string, times) {
    // Step 1. Create an empty string that will host the repeated string
    var repeatedString = "";

    // Step 2. Set the While loop with (times > 0) as the condition to check
    while (times > 0) { // As long as times is greater than 0, the statement is executed
        // The statement
        repeatedString += string; // Same as repeatedString = repeatedString + string;
        times--; // Same as times = times - 1;
    }
    /* While loop logic
                        Condition       T/F       repeatedString += string      repeatedString        times
      First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
      Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
      Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
      Fourth iteration   (0 > 0)        false
      }
    */

    // Step 3. Return the repeated string
    return repeatedString; // "abcabcabc"
}

repeatStringNumTimes("abc", 3);


// Short :
function repeatStringNumTimes(string, times) {
    var repeatString = '';
    while (times > 0) {
        repeatString += string;
        times--;
    }
    return repeatString;
}
repeatStringNumTimes('*', 8);




//II.   Approach #2: Repeat a String using a Conditional and Recursion

function repeatStringNumTimes(string, times) {
    // Step 1. Check if times is negative and return an empty string if true
    if (times < 0) {
        return "";
    }

    // Step 2. Check if times equals to 1 and return the string itself if it's the case.
    if (times === 1) {
        return string;
    }

    // Step 3. Use recursion
    else {
        return string + repeatStringNumTimes(string, times - 1); // return "abcabcabc";
    }
    /* 
      First Part of the recursion method
      You need to remember that you won’t have just one call, you’ll have several nested calls
                       times       string + repeatStringNumTimes(string, times - 1)
        1st call         3                 "abc" + ("abc", 3 - 1)
        2nd call         2                 "abc" + ("abc", 2 - 1)
        3rd call         1                 "abc" => if (times === 1) return string;
        4th call         0                  ""   => if (times <= 0) return "";
      Second part of the recursion method
        4th call will return      ""
        3rd call will return     "abc"
        2nd call will return     "abc"
        1st call will return     "abc"
      The final call is a concatenation of all the strings
      return "abc" + "abc" + "abc"; // return "abcabcabc";
    */
}
repeatStringNumTimes("abc", 3);


// Short
function repeatStringNumTimes(string, times) {
    if (times < 0)
        return "";
    if (times === 1)
        return string;
    else
        return string + repeatStringNumTimes(string, times - 1);
}
repeatStringNumtimes('*', 3);




//III.  Approach #3: Repeat a String using ES6 repeat() method


function repeatStringNumTimes(string, times) {
    //Step 1. If times is positive, return the repeated string
    if (times > 0) { // (3 > 0) => true
        return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
    }

    //Step 2. Else if times is negative, return an empty string if true
    else {
        return "";
    }
}

repeatStringNumTimes("abc", 3);

//Short:

function repeatStringNumTimes(string, times) {
    if (times > 0) {
        return string.repeat(times);
    } else {
        return "";
    }
}
repeatStringNumTimes('*', 15);


// TERNARY Operator

function repeatStringNumTimes(string, times) {
    return times > 0 ? string.repeat(times) : "";
}
repeatStringNumTimes("abc", 3);
