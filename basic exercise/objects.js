// Simples Object constructor

var Car1 = function (wheels, engines, seats) {
    this.wheels = wheels;
    this.engines = engines;
    this.seats = seats;
};

var myCar1 = new Car1( 4, 2, 5);

//Using pricate methods and properties

var Car2 = function() {
    var speed = 10;
    this.accelerate = function(change) {
        speed += change;
    };
    this.decelerate = function() {
        speed -= 5;
    };
    this.getSpeed = function() {
        return speed;
    };
};

var myCar2 = new Car2();

myCar2.getSpeed();
myCar2.accelerate(10);
myCar2.decelerate();
myCar2.getSpeed();

//Setting private
var Bike = function() {
    var gear = "";
    this.setGear = function(item) {
        gear = item;
    };
    this.getGear = function() {
        return gear;
    };
};

var myBike = new Bike();
myBike.getGear();
myBike.setGear(3);
myBike.getGear();