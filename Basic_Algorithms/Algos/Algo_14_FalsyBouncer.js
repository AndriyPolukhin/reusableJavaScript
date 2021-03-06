// Mutations

/*
=================================
        My Answer
=================================
*/

function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var newArr = [];
    var a;

    function filterFalse(value) {
        a = Boolean(value);
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

bouncer([1, null, NaN, 2, undefined]);



// Refactored solution on 23/07/2017
function bouncer(arr) {

    let newArr = [];

    function filterFalse(value) {
        let a = Boolean(value);
        if (a === true)
            return a;
    }

    function filterIt(x) {
        let y = filterFalse(x);
        if (y) {
            return true;
        }
        return false;
    }

    return newArr = arr.filter(filterIt);

}

console.log(bouncer([1, null, NaN, 2, undefined]));

// Refactored solution on 03/08/2017

function bouncer(arr) {

    let newArr = [];

    function filterFalse(value) {
        let a = Boolean(value);
        return a !== false;
    }

    function filterIt(x) {
        let y = filterFalse(x);
        return y === true ? true : false;

    }
    return newArr = arr.filter(filterIt);

}
console.log(bouncer([1, null, NaN, 2, undefined]));


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


//  SOLUTIONS


// solution 1
function bouncer(arr) {

    return arr = arr.filter(el => el);

}

console.log(bouncer([1, null, NaN, 2, undefined]));


// solutiono 2
function bouncer(arr) {
    return arr.filter(function (val) {
        return val;
    });
}
bouncer([1, null, NaN, 2, undefined]);

// solution 3
function bouncer(arr) {
    return arr.filter(Boolean);
}
bouncer([1, null, NaN, 2, undefined]);

// solution 4
function bouncer(arr) {
    return arr.filter(function (val) {
        return val !== false &&
            val !== "" &&
            !(Number.isNaN(val)) &&
            val !== undefined &&
            val !== 0 &&
            val !== null;
    });
}

bouncer([1, null, NaN, 2, undefined]);


// solution 5
function bouncer(arr) {
    return arr.filter((val) => {
        return !!val;
    });
}
bouncer([1, null, NaN, 2, undefined]);


// solution 6

function bouncer(arr) {
    var falsy;
    var trueArr = [];

    for (i = 0; i < arr.length; i++) {
        falsy = Boolean(arr[i]);

        if (falsy === true) {
            trueArr.push(arr[i]);
        }
    }
    return trueArr;
}

bouncer([1, null, NaN, 2, undefined]);


// solution 7 from a coder

function bouncer(arr) {

    return arr.filter(function (x) {
        if (x !== null) {
            return x;
        }
    });
}

bouncer([1, null, NaN, 2, undefined, 4]);

// shorter
function bouncer(arr) {
    return arr.filter(function (i) {
        return i !== null ? i : '';
    });
}
bouncer([1, null, NaN, 2, undefined, 4]);
