function getIndexToIns(arr, num) {

    console.log(arr.every(i => num >= num + 1));
}


console.log('Should return 1: Got => ' + getIndexToIns([60, 40], 50));
console.log('Should return 2: Got => ' + getIndexToIns([10, 30, 20, 50, 40], 30));
console.log('Should return 3: Got => ' + getIndexToIns([20, 10, 50, 40, 30], 35));
