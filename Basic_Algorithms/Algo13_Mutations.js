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
