// Return Largest Numbers in Arrays

/*
=================================
        My Answer
=================================
*/

function largestOfFour(arr) {
    // You can do this!
    var arrFin = [];

    for (var i = 0; i < arr.length; i++) {
        arr[i].sort(function (a, b) {
            return b - a;
        });
        arrFin.push(arr[i][0]);
    }

    return arrFin;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*
=================================
       Testing
=================================
*/

var array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
var arrFin = [];

for (var i = 0; i < array.length; i++) {
    array[i].sort(function (a, b) {
        return b - a;
    });
    arrFin.push(array[i][0]);
}

return arrFin;
)
}

// SORT function

var longestWord = strSplit.sort(function (a, b) {
    return b.length - a.length;
});



// Three ways you can find the largest number in an array using JavaScript


// I.   Approach #1: Return the Largest Numbers in a Array With a For Loop

function largestOfFour(arr) {
    // Step 1. Create an array that will host the result of the 4 sub-arrays
    var largestNumber = [0, 0, 0, 0];

    // Step 2. Create the first FOR loop that will iterate through the arrays
    for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        /* The starting point, index 0, corresponds to the first array */

        // Step 3. Create the second FOR loop that will iterate through the sub-arrays
        for (var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
            /* The starting point, index 0, corresponds to the first sub-array */

            if (arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {

                largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];

                /* FOR loop cycles
                   arrayIndex => i
                   subArrayIndex => j

                Iteration in the first array
                   For each iteration: arr[i][j]           largestNumber[i]          if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
                   First iteration:    arr[0][0] => 4      largestNumber[0] => 0     4 > 0? => TRUE                       then largestNumber[0] = 4
                   Second iteration:   arr[0][1] => 5      largestNumber[0] => 4     5 > 4? => TRUE                       then largestNumber[0] = 5
                   Third iteration:    arr[0][2] => 1      largestNumber[0] => 5     1 > 5? => FALSE                      then largestNumber[0] = 5
                   Fourth iteration:   arr[0][3] => 3      largestNumber[0] => 5     3 > 5? => FALSE                      then largestNumber[0] = 5
                   Fifth iteration:    arr[0][4] => FALSE  largestNumber[0] => 5                                          largestNumber = [5,0,0,0]
                Exit the first array and continue on the second one
                Iteration in the second array
                   For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
                   First iteration:    arr[1][0] => 13      largestNumber[1] => 0      13 > 0? => TRUE                      then largestNumber[1] = 13
                   Second iteration:   arr[1][1] => 27      largestNumber[1] => 13     27 > 13? => TRUE                     then largestNumber[1] = 27
                   Third iteration:    arr[1][2] => 18      largestNumber[1] => 27     18 > 27? => FALSE                    then largestNumber[1] = 27
                   Fourth iteration:   arr[1][3] => 26      largestNumber[1] => 27     26 > 27? => FALSE                    then largestNumber[1] = 27
                   Fifth iteration:    arr[1][4] => FALSE   largestNumber[1] => 27                                          largestNumber = [5,27,0,0]
                Exit the first array and continue on the third one
                Iteration in the third array
                   For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
                   First iteration:    arr[2][0] => 32      largestNumber[2] => 0      32 > 0? => TRUE                      then largestNumber[2] = 32
                   Second iteration:   arr[2][1] => 35      largestNumber[2] => 32     35 > 32? => TRUE                     then largestNumber[2] = 35
                   Third iteration:    arr[2][2] => 37      largestNumber[2] => 35     37 > 35? => TRUE                     then largestNumber[2] = 37
                   Fourth iteration:   arr[2][3] => 39      largestNumber[2] => 37     39 > 37? => TRUE                     then largestNumber[2] = 39
                   Fifth iteration:    arr[2][4] => FALSE   largestNumber[2] => 39                                          largestNumber = [5,27,39,0]
                Exit the first array and continue on the fourth one
                Iteration in the fourth array
                   For each iteration: arr[i][j]            largestNumber[i]           if arr[i][j] > largestNumber[i]?     then largestNumber[i] = arr[i][j]
                   First iteration:    arr[3][0] => 1000    largestNumber[3] => 0      1000 > 0? => TRUE                    then largestNumber[3] = 1000
                   Second iteration:   arr[3][1] => 1001    largestNumber[3] => 1000   1001 > 1000? => TRUE                 then largestNumber[3] = 1001
                   Third iteration:    arr[3][2] => 857     largestNumber[3] => 1001   857 > 1001? => FALSE                 then largestNumber[3] = 1001
                   Fourth iteration:   arr[3][3] => 1       largestNumber[3] => 1001   1 > 1001? => FALSE                   then largestNumber[3] = 1001
                   Fifth iteration:    arr[3][4] => FALSE   largestNumber[3] => 1001                                        largestNumber = [5,27,39,1001]
                Exit the FOR loop */
            }
        }
    }
    // Step 4. Return the largest numbers of each sub-arrays
    return largestNumber; // largestNumber = [5,27,39,1001];
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



// Short 1:
function largestOfFour(arr) {
    var largestNumber = [0, 0, 9, 0];
    for (var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        for (var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
            if (arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
                largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
            }
        }
    }
    return largestNumber;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Short 2:

function larOfFour(arr) {
    var lN = [0, 0, 0, 0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > lN[i]) {
                lN[i] = arr[i][j];
            }
        }
    }
    return lN;
}

larOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// II.  Approach #2: Return the Largest Numbers in a Array With Built-In Functions — with map() and reduce();
function largestOfFour(mainArray) {
    // Step 1. Map over the main arrays
    return mainArray.map(function (subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

        // Step 2. Grab the largest numbers for each sub-arrays with reduce() method
        return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {

            return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;

            /* Map process and Reduce method cycles
            currentLargestNumber => cLN
            previousLargestNumber => pLN
            Iteration in the first array
                For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
                First iteration:         4           0        4 > 0? => TRUE              4             /
                Second iteration:        5           4        5 > 4? => TRUE              5             /
                Third iteration:         1           5        1 > 5? => FALSE             /             5
                Fourth iteration:        3           5        3 > 5? => FALSE             /             5
                Fifth iteration:         /           5                                               returns 5
             Exit the first array and continue on the second one
            Iteration in the second array
              For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
              First iteration:        13           0        13 > 0? => TRUE            13              /
              Second iteration:       27          13        27 > 13? => TRUE           27              /
              Third iteration:        18          27        18 > 27? => FALSE           /             27
              Fourth iteration:       26          27        26 > 27? => FALSE           /             27
              Fifth iteration:         /          27                                                returns 27
            Exit the first array and continue on the third one
            Iteration in the third array
              For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
              First iteration:        32           0        32 > 0? => TRUE            32              /
              Second iteration:       35          32        35 > 32? => TRUE           35              /
              Third iteration:        37          35        37 > 35? => TRUE           37              /
              Fourth iteration:       39          37        39 > 37? => TRUE           39              /
              Fifth iteration:         /          39                                                returns 39
            Exit the first array and continue on the fourth one
            Iteration in the fourth array
              For each iteration:     cLN         pLN       if (cLN > pLN) ?        then cLN        else pLN
              First iteration:        1000         0        1000 > 0? => TRUE         1000             /
              Second iteration:       1001       1000       1001 > 1000? => TRUE      1001             /
              Third iteration:        857        1001       857 > 1001 => FALSE        /             1001
              Fourth iteration:        1         1001       1 > 1001? => FALSE         /             1001
              Fifth iteration:         /         1001                                              returns 1001
            Exit the first array and continue on the fourth one */
        }, 0); // 0 serves as the context for the first pLN in each sub array
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Short 1:

function largestOfFour(mainArray) {
    return mainArray.map(function (subArray) {
        return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
            return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
        }, 0);
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// III. Approach #3: Return the Largest Numbers in a Array With Built-In Functions — with map() and apply();

// USING:
//      1. apply();
//      2. Math.max();

function largestOfFour(mainArray) {
    // Step 1. Map over the main arrays
    return mainArray.map(function (subArray) { // Step 3. Return the largest numbers of each sub-arrays => returns [5,27,39,1001]

        // Step 2. Return the largest numbers for each sub-arrays with Math.max() method
        return Math.max.apply(null, subArray);
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Short :

function largestOfFour(mainArray) {
    return mainArray.map(function (subArray) {
        return Math.map.apply(null, subArray);
    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
