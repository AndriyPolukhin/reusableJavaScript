/*
=========================
THe Creational Pattern
=========================
*/

// Create an empty object

var newObject = {};

var newObject = Object.create(null);

var newObject = new Object();

// Assign key and value to objects

// 1. Dot suntax
newObject.someKey = 'Hello World';
var key = newObject.someKey;

// 2. Square braket syntax
newObject['someKey'] = 'Hello World - 2';
var key = newObject['someKey'];

// 3. Object.defineProperty
Object.defineProperty(newObject, 'someKey', {
    value: "for more control over property's behaivor",
    writable: true,
    enumerable: true,
    configurable: true
});

var man = Object.create(null);
// 4. Object.defineProperties


Object.defineProperties(newObject, {
    'someKey': {
        value: 'Hello World - 4',
        writable: true
    },
    'anotherKey': {
        value: 'Foo bar',
        writable: false
    }
});
console.log(newObject.someKey + ' ' + newObject.anotherKey);

var driver = Object.create(man);
console.log(driver);
