function getIndexToIns(arr, num) {

    // Sort the array
    arr = arr.sort();

    var setnum = num;
    var ans;
    var arrNum = arr.indexOf(num);

    // create a function that will chec for the where to place an num
    function checkNum(num) {


        for (var i = 0; i < arr.length; i++) {


            for (var j = i + 1; j < arr.length; j++) {

                if ((arr[i] <= setnum) && (arr[j] >= setnum)) {
                    return ans = arr[j];
                    console.log('First if ' + ans);
                } else if (setnum <= arr[i]) {

                    return ans = arr[i];
                    console.log('Second if ' + ans);
                }
            }
        }
    }
    console.log('Did you logged me? ' + num + ' and what did you get ' + ans);
    return arr.findIndex(checkNum);
}


// So first I loop thorought the array in one of the functions
// I create a function that checks for ifs
// I just inject this function into an arr.findIndex(Function);

/*console.log('Should return 1: Got => ' + getIndexToIns([60, 40], 50));*/

console.log('Should return 2: Got => ' + getIndexToIns([10, 30, 20, 50, 40], 30));
/*
console.log('Should return 3: Got => ' + getIndexToIns([20, 10, 50, 40, 30], 35));*/
