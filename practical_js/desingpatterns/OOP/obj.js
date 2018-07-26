// Create new object
const obj = {};
const nextObj = Object.create(Object.prototype);
const lastObj = new Object();

// Key Assign

let obj2 = {};
obj2.param = 'new value';
obj2['param2'] = 'other value';

let val = 'more values';

obj2[val] = 'oboy value';
console.log(obj2.param);
console.log(obj2['param2']);
console.log(obj2[val]);
