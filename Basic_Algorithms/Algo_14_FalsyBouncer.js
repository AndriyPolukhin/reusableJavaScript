// Mutations

/*
=================================
        My Answer
=================================
*/

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr;
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""])

/*
=================================
        testing!

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()


=================================
*/





// Searching in the Array


var fruits = ['apple', 'banana', 'grapes', 'mango', 'oranges'];

function filterItems(query) {
    return fruits.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}
console.log(filterItems('ap'));
console.log(filterItems('an'));


function isBigEnough(value) {
    return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
