// THE MODULE PATTERN
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript

/*
Implementing modules:
1. The Module pattern
2. Object literal notation
3. AMD modules
4. CommonJS modules
5. ECMAScript Harmony modules
*/

// Object Literals !

var myObjectLiteral = {

    variableKey: variableValue,

    functionKey: function () {
        // ...
    }
};


// a more complex object defined by a module

var myModule = {

    myProperty: "someValue",

    // object literals can contain properties and methods.
    // e.g we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: "en"
    },

    // a very basic method
    saySomething: function () {
        console.log("Where in the world is Paul Irish today?");
    },

    // output a value based on the current configuration
    reportMyConfig: function () {
        console.log("Caching is: " + (this.myConfig.useCaching ? "enabled" : "disabled"));
    },

    // override the current configuration
    updateMyConfig: function (newConfig) {

        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

// Outputs: Where in the world is Paul Irish today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
    language: "fr",
    useCaching: false
});

// Outputs: Caching is: disabled
myModule.reportMyConfig();



// Example of a self-container MODULE

var testModule = (function () {

    var countre = 0;

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

// Usage:
testModule.incrementCounter();
// check the reset
testModule.resetCounter();
