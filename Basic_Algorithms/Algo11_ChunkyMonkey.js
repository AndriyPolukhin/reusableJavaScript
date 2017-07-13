// Chunky Monkey

/*
=================================
        My Answer
=================================
*/


function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr.slice(i, i += size));
        i--;
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);




/*
=================================
        testing!
=================================
*/


function chunkArrayInGroups(arr, size) {
    // Break it up.
    return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

ans = [["a", "b"], ["c", "d"]];

var arr = ['a', 'b', 'c', 'd'],
    size = 2,
    ans = [];

// Updated code on 05/07/2017
var arr = ['a', 'b', 'c', 'd'],
    size = 2,
    ans = [];
for (var i = 0; i < arr.length; i++) {
    ans.push(arr.slice(i, size));
    size = size + i;
}


// New solutions looked upon the web.

// Solution 1 Basic code
function chunkArrayInGroups(arr, size) {
    // Firstly we careate two empty arrays temp and result, which we will eventually return.

    var temp = [];
    var result = [];

    // our for loop runs until a is equal to or more than the length of the array in our test
    for (var i = 0; i < arr.length; i++) {
        // Inside our loop, we push to temp using temp.push(arr[i]); if theremainder of i/size is not equal to size -1;

        if (i % size !== size - 1)
            temp.push(arr[i]);

        //Otherwise, we push to temp, push the temp to result and reset temp to an empty array.
        else {
            temp.push(arr[i]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0)
        result.push(temp);
    return result;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);



// Solution 2 Intermediate

function chunkArrayInGroups(arr, size) {
    // Breaj ut uo
    // It's already broken :(
    // Firstly, we slice arr using arr.slice() and create an empty array called arr2.
    arr = arr.slice(); //?
    var arr2 = [];
    // i => length of arr. i += size;
    for (var i = 0, len = arr.length; i < len; i += size) {
        // we push arr2. using arr.slice(0, size)
        arr2.push(arr.slice(0, size));
        // We cahnge the arr to arr.slice(size)
        arr = arr.slice(size);
    }
    //return the value
    return arr2;
}


chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);


// Solutin 3 Advanced

function chunkArrayInGroups(arr, size) {
    // Break it up
    // Firstly we create two var
    var newArr = [];
    var i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
//https://github.com/freeCodeCamp/wiki/blob/master/deprecated%20wiki/Algorithm-Chunky-Monkey.md


// Solution 4 by Patrick Doane

function chunkArrayINGroups(arr, size) {
    var newArray = [];
    var numGroups = Math.ceil(arr.length / size); // NUmber of groups to create a two-dimensional array

    // Get a slice of length size
    var sliceStart = 0;
    var sliceEnd = size;
    var slice = arr.slice(sliceStart, sliceEnd);

    // Split array into groups of length size
    for (var i = 0; i < numGroups; i++) {
        newArray.push(slice);

        // Update sliceStart and sliceEnd
        sliceStart = (i + 1) * size;
        sliceEnd = (i + 2) * size;

        // shift slice to the next group
        slice = arr.slice(sliceStart, sliceEnd);

    }
    return newArray;
}


// Solution 5

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4);
