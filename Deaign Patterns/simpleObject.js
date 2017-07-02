// A car "class"

function Car(model) {

    this.model = model;
    this.color = 'silver';
    this.year = '2012';

    this.getInfo = function () {
        return this.model + ' ' + this.year;
    };
}

var myCar = new Car('ford');
myCar.year = '2010';
console.log(myCar.getInfo());


// Three ways to difine a class in JavaScript

// 1. sing a function

function Apple(type) {
    this.type = type;
    this.color = 'red';
    this.getInfo = getAppleInfo;
}

// anti-patter! 
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}

var apple = new Apple('macintosh');
apple.color = 'reddish';
aler(apple.getInfo());


// 1.1. Methods defined internally

function Apple(type) {
    this.type = type;
    this.color = 'red';
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}

// 1.2. Methods added to the prototype

function Apple(type) {
    this.type = type;
    this.color = 'red';
}
Apple.prototype.getInfo = function () {
    return this.color + " " + this.type + ' apple';

};



// 2. Using object literals

// create an object
var o = {};
// Instead of var o = new Object();
var a = [];
// Instead of var a = new Array();

var apple = {
    type: 'macintosh',
    color: 'red',
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}

apple.color = 'reddish';
console.log(apple.getInfo());



// 3. Singleton using a function

// Combining the both two from the top

var apple = new function () {
    this.type = 'macintosh';
    this.color = 'red';
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}

apple.color = 'reddish';
console.log(apple.getInfo());
