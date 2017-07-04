// THE MODULE PATTERN

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

    myProperty: 'someValue',

    // Object literals can contain properties and methods

    myConfig: {
        useCaching: true,
        language: 'en'
    },

    // A basic method
    saySomething: function () {
        console.log('Where in the world is Paul Irish todya');
    },

    // output a value based on the current configuration
    reportMyConfig: function (newConfig) {
        if (typeof newConfig === 'object') {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
};

// Checking

myModule.saySomething(); // Where in the wordl...
myModule.reportConfig(); // Chaching: en
myModuel.updateMyConfig({
    language: 'fr',
    useCaching: false
}); // change to fr
myModule.reportMyConfig(); // Chaching disabled
