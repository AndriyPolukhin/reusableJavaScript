// Mutations

/*
=================================
        My Answer
=================================
*/

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var newArr = [];
    var i = 0;

    function filterFalse(value) {
        var a = Boolean(value);
        if (a === true) {
            return a;
        }
        return a;
    }

    function filterIt(x) {
        var y = filterFalse(x);
        if (y) {
            return true;
        } else {
            return false;
        }
    }

    newArr = arr.filter(filterIt);
    return newArr;
}

bouncer([7, "ate", "", false, 9]);


/*
=================================
        testing!

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()


=================================
*/


var arr = [1, null, NaN, 2, undefined];
var newArr = [];
var i = 0;

function filterFalse(value) {
    let a = new Boolean(value);
    if (a === true) {
        return a;
    }
}


var arr = [1, null, NaN, 2, undefined];
var newArr = [];
var i = 0;

function filterFalse(value) {
    var a = Boolean(value);
    if (a === true) {
        return a;
    }
    return a;
}

function filterIt(x) {
    if (filterFalse(x[i] !== null)) {
        return x;
    } else if (filterFalse(x[i] === null)) {
        i++;
    }
    i++;
}

newArr = arr.filter(filterIt);
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
