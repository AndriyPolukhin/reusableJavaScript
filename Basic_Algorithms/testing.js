function getIndexToIns(arr, num) {

    arr = arr.sort();
    var arrNum = arr.indexOf(num);

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {

            if ((arr[i] < num) && (arr[j] > num)) {
                return arr[i].index + 1;
            }

        }
    }
}


}

/*console.log('Should return 1: Got => ' + getIndexToIns([60, 40], 50));*/

console.log('Should return 2: Got => ' + getIndexToIns([10, 30, 20, 50, 40], 30));
/*
console.log('Should return 3: Got => ' + getIndexToIns([20, 10, 50, 40, 30], 35));*/
