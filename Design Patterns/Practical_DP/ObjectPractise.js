// Creating objects
var obj = {};
var nextObj = Object.create(Object.prototype);
var lastObj = new Object();

// Assign keys and values

var obj = {};
obj.param = 'new value';
console.log(obj.param);

obj['param2'] = 'next value';
console.log(obj['param2']);

var val = 'value';
obj[val] = 'one more value';
console.log(obj[val]);

//

Object.defineProperty(obj, 'name', {
    value: 'my name',
    writable: true,
    enumerable: true,
    configurable: true
})
