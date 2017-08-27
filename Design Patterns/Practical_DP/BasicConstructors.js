/*
=========================
Basic Constructors
=========================
*/

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + " has done " + this.miles + " miles ";
    };
}

// USAGE:

// we can create new instances

var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);

// and then see the ourput when log to console
console.log(civic.toString());
console.log(mondeo.toString());

/*
=============================
Constructors with Prototypes
=============================
*/


function Car1(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// Prototype the toString
Car1.prototype.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles';
};

// USAGE:

var civic = new Car1('Honda Civic', 2009, 20000);
var mondeo = new Car1('Ford Mondeo', 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());
