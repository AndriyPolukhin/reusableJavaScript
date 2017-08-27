/*var Car = function () {
    var speed = 10;

    this.accelerate = function (change) {
        speed += change;
    };

    this.decelerate = function () {
        speed -= 5;
    };

    this.getSpeed = function () {
        return speed;
    };
};

var myCar = new Car();
console.log(myCar.getSpeed());
myCar.accelerate(55);
console.log(myCar.getSpeed());
myCar.decelerate();
console.log(myCar.getSpeed());
myCar.decelerate();
console.log(myCar.getSpeed());

*/
var Bike = function () {
    var gear = 0;
    this.getGear = function () {
        return gear;
    };

    this.setGear = function (add) {
        gear = add;
    };

};

var myBike = new Bike();


myBike.setGear(5);
myBike.getGear();
console.log(myBike.getGear());
myBike.setGear(4);
myBike.getGear();
console.log(myBike.getGear());
myBike.setGear(3);
myBike.getGear();
console.log(myBike.getGear());
