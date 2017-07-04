// Chunky Monkey

/*
=================================
        My Answer
=================================
*/


function chunkArrayInGroups(arr, size) {
    // Break it up.
    return arr;
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
