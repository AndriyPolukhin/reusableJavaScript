// Where do I belong

/*
=================================
        My Answer
=================================
*/

function getIndexToIns(arr, num) {

    // Sort the array
    arr.push(num);

    arr.sort(function (a, b) {
        return a - b;
    });

    function numIndex(e) {

        return e >= num;

    }

    return arr.findIndex(numIndex);


}

// So first I loop thorought the array in one of the functions
// I create a function that checks for ifs
// I just inject this function into an arr.findIndex(Function);

console.log('Should return 3: Got should be last one => ' + getIndexToIns([2, 5, 10], 15));

console.log('Should return 2:  => ' + getIndexToIns([5, 3, 20, 3], 5));
console.log('Should return 3: Got => ' + getIndexToIns([20, 10, 50, 40, 30], 35));
/*
=================================
        testing!
=================================
*/


// Shorter solution

function getIndexToIns(arr, num) {
    arr.push(num);
    return arr.sort(function (a, b) {
        return a - b;
    }).indexOf(num);
}

console.log('Should return 3: Got should be last one => ' + getIndexToIns([2, 5, 10], 15));
