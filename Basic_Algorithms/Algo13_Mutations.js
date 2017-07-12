// Mutations

/*
=================================
        My Answer
=================================
*/


function mutation(arr) {
    return arr;
}

mutation(["hello", "hey"]);



// Return the remaining elements of an array after chopping n elements

/*
=================================
        testing!
=================================
*/

function mutation(arr) {
    var arr1 = arr[0].toLowerCase();
    var arr2 = arr[1].toLowerCase().split('');
    var arrCheck;
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
