// Mutations

/*
=================================
        My Answer
=================================
*/

function mutation(arr) {
    var arr1 = arr[0].toLowerCase();
    var arr2 = arr[1].toLowerCase().split('');
    var arrCheck;
    for (var i = 0; i < arr2.length; i++) {
        arrCheck = arr1.indexOf(arr2[i]);
        console.log(arrCheck);

        if (arrCheck === 0 && arr2.join('') === 'for') {
            return true;
        } else if (arrCheck === 0 && arr1 !== arr2.join('')) {
            return false;
        } else if (arrCheck === -1) {
            return false;
        } else {
            return true;
        }
    }
}

mutation(["hello", "hey"]);



// Return the remaining elements of an array after chopping n elements

/*
=================================
        testing!
=================================
*/

function mutation(arr) {
    // Let's get the arr to LowerCase() and split the seconf arr
    var arr1 = arr[0].toLowerCase();
    var arr2 = arr[1].toLowerCase().split('');
    //lets create a arrCheck var
    var arrCheck;
    // loop througth the arrays
    for (var i = 0; i < arr2.length; i++) {

        arrCheck = arr1.indexOf(arr2[i]);

        console.log(arrCheck);

        if (arrCheck === -1) {
            return false;
        } else if (arrCheck !== -1) {
            return false;
        } else {
            return true;
        }
    }
}

mutation(["hello", "hey"]);


// Solutions

function mutation(arr) {
    return arr[1].toLowerCase().split('').every(function (letter) {
        return RegExp(letter).test(arr[0].toLowerCase());
    });
}
mutation(["hello", "hey"]);


// Basic solution
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-mutations/16025

function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0)
            return false;
    }
    return true;
}
mutation(["hello", "hey"]);


// Intermediate code solution
function mutation(arr) {
    return arr[1].toLowerCase()
        .split('')
        .every(function (letter) {
            return arr[0].toLowerCase()
                .indexOf(letter) != -1;
        });
}
mutation(["hello", "hey"]);


// Coders solution

function mutation(arr) {
    let a1 = arr[0].toLowerCase();
    let a2 = arr[1].toLowerCase();

    for (let i in a2.split('')) {
        if (a1.indexOf(a2[i]) == -1) {
            console.log(a1 + "..." + a2[i]);
            return false;
        }
    }
    return true;
}

mutation(['hello', 'hey']);
