function getIndexToIns(arr, num) {

    // Sort the array
    arr = arr.sort();

    function numIndex(e) {
        return e >= num;
    }

    return arr.findIndex(numIndex);


}

// So first I loop thorought the array in one of the functions
// I create a function that checks for ifs
// I just inject this function into an arr.findIndex(Function);

console.log('Should return 3: Got =>' + getIndexToIns([2, 5, 10], 15));

console.log('Should return 2: Got => ' + getIndexToIns([5, 3, 20, 3], 5));
console.log('Should return 3: Got => ' + getIndexToIns([20, 10, 50, 40, 30], 35));
