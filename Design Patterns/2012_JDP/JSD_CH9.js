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
var defineProp = function (obj, key, value) {
    config.value = value;
    Ojbect.defineProperty(obj, key, config);
}
// Create a new empty object
var man = Object.create(null);
// Populate an object with properties
defineProp(man, 'car', 'Dolorean');
defineProp(man, 'dob', '1989');
defineProp(man, 'beard', false);


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
    return this.model + ' has doen ' + this.miles + ' miles';
};

var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);
consle.log(civic.toString);


// The Singleton Pattern

// 1. First Examples

var mySingleton = {
    property1: 'something',
    property2: 'something else',
    method1: function () {
        console.log('Hello word');
    }
};

// 2. Extending and example

var mySingleton = function () {
    // here are the private methods and variables
    var privateVariable = 'something private';

    function showPrivate() {
        console.log(privateVariable);
    }

    // public var and method which have access

    return {
        publicMethod: function () {
            showPrivate();
        },

        publicVar: 'the public can see this'
    };
};

var single = mySingleton();
single.publicMethod(); // logs 'something private'
console.log(publicVar); // logs 'the public can see this'


// 3. Place a singleton into a function

var Singleton = (function () {
    var instantiated;

    function init() {
        // singleton here
        return {
            publicMethod: function () {
                console.log('hello world');
            },
            publicProperty: 'test'
        };
    }

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };

})();

//calling public method is then as easy as:
Singleton.getInstance().publicMethod();

// 4. One more singleton Example
var SingletonTester = (function () {
    // options: an bject containing configuration options for the singleton
    //e. g. var options = { name: 'test', pointX: 5};
    function Singleton(options) {
        // set options to the options supplied or an empty object if none provided
        options = options || {};
        // set the name parameter
        this.name = 'SingletonTester';
        // set the value of pointX
        this.pointX = args.pointX || 6;
        // set the value of pointY
        this.pointY = args.pointY || 10;
    }

    // this is our instance holder
    var instance;

    // this is an emulation of static variables and methods
    var _static = {

        name: 'SingletonTester',

        // This is a method for getting an instance
        // IT return a singleton instance of a singlton object
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;
})();
var singletonTest = SingletonTester.getInstace({
pointX: 5
});
})




});
