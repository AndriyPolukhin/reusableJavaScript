// The Constructor Pattern

/*
Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments which a constructor can use to set the values of member properties and methods when the object is first created
*/

// Object Creation  3 options

// 1.
var newObject = {};

// 2.
var newObject = Object.create(Object.prototype);

// 3.
var newObject = new Object();


// Four ways in which keys and values can be assinged to object

// ECMAScript 3 compatible approaches

// 1. Dot syntax

// Set properties
newObject.someKey = 'Hello World';
// Get properties
var value = newObject.someKey;

// 2. Square bracket syntax

// Set properties
newObject['someKey'] = 'Hello World';
// Get properties
var value = newOjbect['someKey'];

// ECMAScript 4 only compatible approaches

// 3. Object.defineProperty

// Set properties
Object.defineProperty(newObject, 'someKey', {
    value: 'for more control of the property\'s behavior',
    writable: true,
    enumerable: true,
    configurable: true
});

// Shorthand

var defineProp = function (obj, key, value) {
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    };
    Object.defineProperty(obj, key, config);
};

// Usage
var person = Object.create(Object.prototype);

// Populate the object with properties

defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1985');
definePrope(person, 'hasBeard', false);

console.log(person);



// 4. Object.defineProperties

// Set properties
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


// Usage
// Create with inheritance
var driver = Object.create(person);
//Set properties
defineProp(driver, 'topSpeed', '100mph');
