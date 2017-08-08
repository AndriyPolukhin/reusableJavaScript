/*
=========================
THe Singleton Pattern
=========================
*/


// E.G. 1
var mySingleton = {

    property1: 'something',

    property2: 'something else',

    method1: function () {
        console.log('hello world');
    }
};

//console.log(mySingleton);

// E.G. 2
var mySingleton2 = function () {

    // here are our private methods and variables
    var privateVariable = 'something private';

    function showPrivate() {
        console.log(privateVariable + ' ' + 'Now what do you know!');
    }

    // public vairable and methods ( which can access
    // private varibales and methods)
    return {

        publicMethod: function () {
            showPrivate();
        },

        publicVar: 'the public can see this!'
    };
};

var single = mySingleton2();
single.publicMethod();
console.log(single.publicVar);

// E.G. 3

var Singleton3 = (function () {

    var instantiated;

    function init() {
        // sinleton here
        return {
            publicMethod: function () {
                console.log('hello world return from publicMethod');
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

// calling public methods is then as easy as:
console.log(Singleton3.getInstance().publicMethod());

// E.G. 4

var SingletonTester = (function () {

    // potions: an object containning configuration options for the singleton
    // e.g. var options = { name: 'test', pointX: 5 };
    function Singleton(options) {

        // set options to the options supplied or an empty object if none provided.
        options = options || {};
        // set the name parameter
        this.name = 'SingletonTester';
        // set the value of pointX
        this.pointX = args.pointX || 6;
        // set the value of pointY
        this.pointY = args.pointY || 10;
    }

    // this is our intance holder
    var instance;

    // this si an emulation of static variables and methods
    var _static = {

        name: 'SingletonTester',

        // This is a method for getting an instance
        // It returns a singleton instance of a singleton object
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            }
            return instance;
        }
    };
    return _static;

})();

var singletonTest = SingletonTester.getInstance({
    pointX: 5
});

console.log(singletonTest.pointX);
