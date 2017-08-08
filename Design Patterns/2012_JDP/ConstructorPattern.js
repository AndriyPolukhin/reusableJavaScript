/*
=========================
THe Constructor Pattern
=========================
*/

// BASIC CONSTRUCTORS

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 55000);

/*console.log(civic.toString());
console.log(mondeo.toString());*/


// CONSTRUCTORS WITH PROTOTYPES

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles';
};

var civic = new Car('Honda Civic - 2', 2009, 20000);
var mondeo = new Car('Ford mondeo - 2', 2010, 55000);

console.log(civic.toString() + ' ' + mondeo.toString());
