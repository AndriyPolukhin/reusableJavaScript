// Arrays Manipulation

var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val) {
   return val + 3; 
});

console.log(newArray);
console.log(oldArray);

// Reduce

var array1 = [4,5,6,7,8];
var singleVal = 0;
singleVal = array1.reduce(function(b,a) {
   return b + a; 
}, 0);

console.log(singleVal);

// Filter

var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray2  = oldArray.filter(function(val) { 
    return val < 6;
});

console.log(newArray2);

// Sort

var array3 = [1, 12, 21, 2];

array.sort(function(a,b) {
   return b - a; 
});

// Reverse

var array4 = [1,2,3,4,5,6,7];
var newArray4 = [];

newArray4 = array4.reverse();

// Concat

var oldArray5 = [1,2,3];
var newArray5 = [];
var contactMe = [4,5,6];

newArray5 = oldArray5.concat(concatMe);

// Split

var string = 'Split me into an array';
var array6 = [];

array6 = string.split(/\s/);


// Join

var joinMe = ['Split', 'me', 'into', 'an', 'array'];
var joinedString = '';

joinedString = joinMe.join(' ');