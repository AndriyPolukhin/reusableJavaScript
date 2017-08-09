<<<<<<< HEAD
// JS Nuggets : Data Types


var data  = false;
if (data) {
    console.log('Booleans rule!');
} else {
    console.log('Booleans are lame.');
}

// null

var n = null;
console.log(n * 32);

// undefined

var a;
console.log(a + 2);

// Number
var num = 3.6;
var ber = 6.4;
console.log(num + ber);
=======

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}

var civic = new Car('Honda', )
>>>>>>> origin/master
