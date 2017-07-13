// Slasher Flick

/*
=================================
        My Answer
=================================
*/

function slasher(arr, howMany) {
    // it doesn't always pay to be first

    arr.splice(0, howMany);


    return arr;
}


slasher([1, 2, 3], 2);


// Return the remaining elements of an array after chopping n elements

/*
=================================
        testing!
=================================
*/


// Solutions Basic
function slasher(arr, howMany) {
    // remove the head
    arr.splice(0, howMany);
    return arr;
}

slasher([1, 2, 3], 2);

// Solution Intermediate

function slasher(arr, howMany) {
    //return after slice
    return arr.slice(howMany);
}
