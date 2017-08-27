/*
=========================
MODULE Pattern
=========================
*/

/*
The Module pattern
Object literal notation
AMD modules
CommonJS modules
ECMAScript Harmony modules
*/




/*
=========================
Object Literals
=========================


var myObjectLiteral = {
    variableKey: variableValue,
    functionKey: function () {

    }
};*/

// EXAMPLE OF A MODULE

var myModule = {

    myProperty: 'someValue',

    // object literals can contain both properties and methods
    // e.g. lets define a further object for module config:

    myConfig: {
        useCaching: true,
        language: 'en'
    },

    // a very basic method
    saySomething: function () {
        console.log('Where in the world is Anastasia Tsukrova today?');
    },

    // now output a value based on the current configuration:

    reportMyConfig: function () {
        console.log('Caching is: ' + (this.myConfig.useCaching ? 'enabled' : 'disabled'));
    },

    // override the current configuration
    updateMyConfig: function (newConfig) {

        if (typeof newConfig === 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }

};

// Outputs: Where in the world is?
myModule.saySomething();

// Outputs Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
    language: 'fr',
    useCaching: false
});

// Outputs Caching is disabled:
myModule.reportMyConfig();

console.log(myModule.myProperty);

/*
=========================
MODULE Pattern main
=========================
*/


// EXAMPLES

var testModule = (function () {

    var counter = 0;

    return {

        incrementCounter: function () {
            return counter++;
        },

        resetCounter: function () {
            console.log('counter value prior to reset: ' + counter);
            counter = 0;
        }
    };
})();

// USAGE:

// Increment the coutner
testModule.incrementCounter();

//Check the counter value and reset
testModule.resetCounter();



// NAMESPACING PUBLIC AND PRIVATE

var myNamespace = (function () {

    var myPrivateVar, myPrivateMethod;

    // A provate counter variable
    myPrivateVar = 0;

    // a private function which logs any argument
    myPrivateMethod = function (foo) {
        console.log(foo);
    };

    return {

        // A public variable
        myPublicVar: 'foo',

        // a public method utilizing privates
        myPublicFunction: function (bar) {

            // Increment our private counter
            myPrivateVar++;

            // Call our private method using bar
            myPrivateMethod(bar);
        }
    };

})();

myNamespace.myPublicFunction(12);


// BASKET MODULE

var basketModule = (function () {

    // privates

    var basket = [];

    function doSomethingPrivate() {
        //...
    }

    function doSomethingElsePrivate() {
        //...
    }

    // Return object exposed to the public
    return {

        // Add items to our basket
        addItem: function (values) {
            basket.push(values);
        },

        // Get the count of imtes in the basket
        getItemCount: function () {
            return basket.length;
        },

        // Public alias of itmes in the basket
        doSomething: doSomethingPrivate,

        // get the total value of itmes in the basket
        getTotal: function () {
            var q = this.getItemCount(),
                p = 0;

            while (q--) {
                p += basket[q].price;
            }

            return p;
        }
    };
})();

// basketModule return an object with a public API we can use

basketModule.addItem({
    item: 'bread',
    price: 0.5
});

basketModule.addItem({
    item: 'butter',
    price: 0.3
});

// Outputs: 2
console.log('Number of Items in the basket: ' + basketModule.getItemCount());
// Outputs 0.8
console.log('Price is: ' + basketModule.getTotal());
//* will not work
console.log(basketModule.basket);
//console.log(basket);

/*
===========================
MODULE Pattern Variations
===========================
*/


// imports
// Global module
var myModule = (function (jQ, _) {

    function privateMethod1() {
        jQ(".container").html("test");
    }

    function privateMethod2() {
        console.log(_.min([10, 5, 100, 2, 1000]));
    }

    return {
        publicMethod: function () {
            privateMethod1();
        }
    };

    // Pull in jQuery and Underscore
})(jQuery, _);

myModule.publicMethod();


// exports

// Global module

var myModule = (function () {

    // Module object
    var module = {},
        privateVariable = 'Hello World!';

    function privateMethod() {
        //...
    }

    module.prublicProperty = 'Foobar';
    module.publicMethod = function () {
        console.log(privateVariable);
    };

    return module;
})();


// Dojo

// Global module
var myModule = (function () {

    // Module object
    var module = {},
        privateVariable = "Hello World";

    function privateMethod() {
        // ...
    }

    module.publicProperty = "Foobar";
    module.publicMethod = function () {
        console.log(privateVariable);
    };

    return module;

})();

require(["dojo/_base/customStore"], function (store) {

    // using dojo.setObject()
    store.setObject("basket.core", (function () {

        var basket = [];

        function privateMethod() {
            console.log(basket);
        }

        return {
            publicMethod: function () {
                privateMethod();
            }
        };

    })());

});


//ExtJS

// Create namespace
Ext.namespace('myNameSpace');

// create application
myNameSpace.app = function () {

    // do NOT access DOM form hrer; elemnts fon't exist yet

    // private variables
    var btn1,
        privVar1 = 11;

    //private functions
    var btn1Handler = function (button, event) {
        console.log('privVar1=' + privaVar1);
        console.log('this.btn1Text='
            this.btn1Text);
    };

    // oublic space
    return {
        // public properties, e.g. strings to translate
        btn1Text: "Button 1",

        // public methods
        init: function () {
            if (Ext.Ext2) {
                btn1 = new Ext.Button({
                    renderTo: 'btn1-ct',
                    text: this.btn1Text,
                    handler: btn1Handler
                });
            } else {
                btn1 = new Ext.Button('btn1-ct', {
                    text: this.btn1Text,
                    handler: butn1Handler
                });
            }
        }
    };
}();
