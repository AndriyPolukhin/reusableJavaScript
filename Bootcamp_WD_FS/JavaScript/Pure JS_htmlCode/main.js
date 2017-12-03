// init a fun() with placeholders [holder] and [holder[value]]
function inArray(arrayToCheck, value) {
    // init a for loop for [holder]
    for (j = 0; j < arrayToCheck.length; j++) {
        // init a check for the [holder[value]]
        if (arrayToCheck[j] === value) {
            // finish with true if found
            return true;
        }
    }
    // finish with false if !found
    return false;
}

// init an random array to hold data
var randArray = [1, 2, 3, 4, 5, 6];

// Output the functionn check
document.write(inArray(randArray, 4) + "<br>");
