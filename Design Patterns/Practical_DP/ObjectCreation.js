/*
=========================
THe Creational Pattern
=========================
*/

// Create an empty object

var newObject = {};
var newObject = Object.create(Object.prototype);
var newObject = new Object();

// FOUR Ways in which keys and values can then be assigned to an object

// 1. Dot syntx.
newObject.someKey = 'Hello World';
var value = newObject.someKey;
console.log(value);

// 2. Square braket syntax

newObject['someKey'] = 'Hello Wrold';
var value = newObject['someKey'];

console.log(value);

// 3. Object.definedProperty

// set property
Object.defineProperty(newObject, 'someKey', {
    value: 'for more control of the property\'s behavior',
    writable: true,
    enumerable: true,
    configurable: true
});

// This is a shorthadn of the above code

var defineProp = function (obj, key, value) {
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj, key, config);
};

// to use this create a new empty 'person' object
var person = Object.create(Object.prototype);

//Populate the object with properties
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);
console.log(person);


// 4.Object.defineProperties

// Set the properties
Object.defineProperties(newObject, {
    'someKey': {
        value: 'Hello World',
        writable: true
    },
    'anotherKey': {
        value: 'Foo bar',
        writable: false
    }
});

console.log(newObject.someKey);
console.log(newObject['anotherKey']);


// usage

var driver = Object.create(person);
defineProp(driver, 'topSpeed', '100mph');
console.log(driver.dateOfBirth);
console.log(driver.topSpeed);
