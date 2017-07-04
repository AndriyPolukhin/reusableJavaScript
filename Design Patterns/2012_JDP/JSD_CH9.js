/*
=========================
THe Creational Pattern
=========================
*/

// 3 ways to create a new empty object

var newObject = {};
var newOjbect = Object.create(null);
var newObject = new Object();

// 4 ways  which keys and values assinged to an object

// ECMAScript 3 compatible approaches

// 1. Dot syntax
newObject.someKey = 'Hello World'; // Write properties
var key = newObject.someKey; // Access properties

// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties
var key = newObject['someKey']; // Access properties

// ECMAScript 5 only

// 3. Object.definePRoperty
Object.defineProperty(newObject, 'someKey', {
   value: 'for more control of the property\'s behavior',
    writable: true,
    enumerable: true,
    configurable: true
});

// shorthand
var defineProp = function ( obj, key, value) {
    config.value = value;
    Ojbect.defineProperty(obj, key, config);
}
// Create a new empty object
var man = Object.create(null);
// Populate an object with properties
defineProp( man, 'car', 'Dolorean');
defineProp( man, 'dob', '1989');
defineProp( man, 'beard', false);


// 4. Object.defineProperties

Object.definePRoperties(newObject, {
    'someKey': {
    value: 'Helo World',
    writable: true
    },
    'anotherKey': {
        value: 'Foo bar',
        writable: false
    }
});

var driver = Object.create(man);
defineProp(driver, 'topSpeed', '100mph');
driver.topSpeed

/*
=========================
THe Constructor Pattern
=========================
*/

// Basic constructor

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
    
    this.toString = function () {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}

var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());



// Constructors With Prototypes

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return this.model +' has doen ' + this.miles + ' miles';
};

var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
consle.log(civic.toString);