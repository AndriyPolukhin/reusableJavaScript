// Seek & Destroy

/*
=================================
        My Answer
=================================
*/
function destroyer(arr) {
    // Remove all the values
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



/*
=================================
        testing!
=================================
*/

// I need to accomplish the following:
// arr should be modified to exclude the arguments
// a pseudo code for this is: arr.filter(arg1 and arg2)
// we have arg[0] and arg[1], so we have arg[i]

var arr = [1, 2, 3, 1, 2, 3];
argument[0] = 2;
argument[1] = 3;

function destroyer(arr) {
    for (var i = 0; i < arr.length; i++) {
        return arr.filter(function (x) {
            if (arr[i] === arguments[i]) {
                return x;
            }
        });
    }
    return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// testing 19.07.2017
function destroyer(arr) {
    // Remove all the values

    function checkArg(a) {
        for (var i = arguments[0]; i < arguments.length; i++) {
            for (var j = i + 1; j < arguments.length; j++) {
                if (arr[i] === i || arr[j] === j) {
                    return false;
                }
                return true;
            }
        }
    }
    var result = arr.filter(checkArg);
    return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Read this article for more clues
//https://stackoverflow.com/questions/33686942/javascript-filter-callback-that-uses-arguments
