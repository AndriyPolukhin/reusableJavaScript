var myArray = [];
for (var j = 1; j < 6; j++) {
    myArray.push(j);
}


var myArray1 = [];
for (var c = 1; c < 10; c += 2) {
    myArray1.push(c);
}

var ourArray = [];
for (var i = 10; i > 10; i -= 2) {
    ourArray.push(i);
}

var myArray2 = [];
for (var j = 9; j > 0; j -= 2) {
    myArray2.push(j);
}

var myArr1 = [];
var total1 = 0;
for (var j = 0; j < myArr1.length; j++) {
    total += myArr1[j];
}

function multiplyAll(arr) {
    var product = 1;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7, ]]);


var myArray3 = [];
var j = 0;
while (j < 5) {
    myArray3.push(j);
    j++;
}
