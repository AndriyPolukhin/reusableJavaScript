/*

var nums = [45, 65, 32, 115];

nums.forEach(function (num) {
    console.log(num);
});

*/

/* CUSTOM FOR EACH  FUNCITON */

function myForEach(arr, func) {
    // loop thorought the array
    for (let i = 0; i < arr.length; i++) {
        // call the func inside the array
        func(arr[i]);
    }
}

var colors = ["red", "orange", "blue", "green"];

myForEach(colors, function (color) {
    console.log(color);
});

Array.prototype.myForEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

colors.myForEach(alert);
