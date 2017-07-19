// Seek & Destroy

/*
=================================
        My Answer
=================================
*/
function destroyer(arr) {
    // Remove all the values
    for (var i = 1; i < arguments.length; i++) {
        var skip = arguments[i];
        arr = arr.filter(function (e) {
            return e !== skip;
        });
    }
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
/*
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

*/
// testing 19.07.2017
function destroyer(arr) {
    // Remove all the values

    /* function checkArg(a) {
         for (var i = arguments[0]; i < arguments.length; i++) {
             for (var j = i + 1; j < arguments.length; j++) {
                 debugger;

                 if (arr[i] === i || arr[j] === j) {
                     return false;
                 }
                 return true;
             }
         }
     }*/


    for (var i = 1; i < arguments.length; i++) {
        var skip = arguments[i];
        arr = arr.filter(function (e) {
            return e !== skip;
        });
    }
    return arr;
}



/*   var result = arr.filter(checkArg);
    return result;
}
*/

console.log("Expected [1,1]: " + destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log("Expected [1,5,1]: " + destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log("Expected [1]: " + destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log("Expected [ ]: " + destroyer([2, 3, 2, 3], 2, 3));
console.log("Expected [ \"hamburger\"]: " + destroyer(["tree", "hamburger", 53], "tree", 53));

// Read this article for more clues
//https://stackoverflow.com/questions/33686942/javascript-filter-callback-that-uses-arguments


// Alternative solutions:
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-seek-and-destroy/16046

// Basic solution

function destroyer(arr) {

    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}
console.log("Expected [ \"hamburger\"]: " + destroyer(["tree", "hamburger", 53], "tree", 53));


// Intermediate

function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function (val) {
        return !args.includes(val);
    });
}
console.log("Expected [ \"hamburger\"]: " + destroyer(["tree", "hamburger", 53], "tree", 53));

// More solutions
function removeItems(arr, items) {
    return arr.filter(function (elem) {
        return items.indexOf(elem) === -1;
    });
}

var result = removeItems([1, 2, 3, 1, 2, 3, 4], [2, 3]);

console.log(result); // [1, 1, 4]
