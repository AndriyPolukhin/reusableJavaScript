// Signleton

var mySingleton = (function () {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        // Singleton
        // Private methods and variables
        function privateMethod() {
            console.log('I am private');
        }
        var privateVariable = "Im also private";
        var privateRandomNumber = Math.random();
        return {
            // Public methods and variables
            publicMethod: function () {
                console.log("THe public can see me!");
            },
            publicProperty: "I am also public",
            getRandomNumber: function () {
                return privateRandomNumber;
            }
        };
    };

    return {
        // Get the Singleton instance if one exists
        // or create aone if it doesnt
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
singleA.publicMethod();
console.log(singleA.publicProperty);
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());




