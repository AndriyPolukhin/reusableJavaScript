// Where do I belong

/*
=================================
        My Answer
=================================


function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    return num;
}

getIndexToIns([40, 60], 50);

console.log('Should return 3: ' + getIndexToIns([10, 20, 30, 40, 50], 35));
console.log('Should return 2: ' + getIndexToIns([10, 20, 30, 40, 50], 30));
*/
/*
=================================
        testing!
=================================
*/
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    return num;
}

getIndexToIns([40, 60], 50);

console.log('Should return 3: ' + getIndexToIns([10, 20, 30, 40, 50], 35));
console.log('Should return 2: ' + getIndexToIns([10, 20, 30, 40, 50], 30));



// Testing the algorythm
function getIndexToIns(arr, num) {

    arr = arr.sort();
    var arrNum = arr.indexOf(num);
    var arrCheck = [];
    var min;

    if (arrNum >= 0) {
        return arrNum;
    } else if (arrNum === -1) {
        for (var i = 0; i < arrNum.lenght; i++) {
            min = arrNum[i];
            for (var j = i + 1; j < arrNum.length; j++) {
                if (min < num && j > num) {
                    arrCheck.push(min);
                }
            }
        }
    }
    console.log(arrCheck);

}

console.log('Should return 1: Got => ' + getIndexToIns([60, 40], 50));

console.log('Should return 2: Got => ' + getIndexToIns([10, 30, 20, 50, 40], 30));
console.log('Should return 3: Got => ' + getIndexToIns([20, 10, 50, 40, 30], 35));
