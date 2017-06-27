var oldArray = [1,2,3,4,5];

var newArray = oldArray.map(function(val) {
   return val + 3; 
});

console.log(newArray);
console.log(oldArray);

//Reduce
var array1 = [4,5,6,7,8];
var singleVal = 0;
singleVal = array1.reduce(function(b,a) {
   return b + a; 
}, 0);

console.log(singleVal);