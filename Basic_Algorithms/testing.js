
function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + ' has done ' + this.miles + ' miles';
    };
}

var civic = new Car('Honda', )
