function Animal() {}
Animal.prototype.eat = function() {
  console.log("chow chow chow");
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function() {
  console.log(`I am flying`);
};

let duck = new Bird();
duck.eat();
duck.fly();

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log(`Bark Bark Bark`);
};

Dog.prototype.eat = function() {
  return console.log("mmm mmm mmm");
};

let beagle = new Dog();
beagle.eat();
beagle.bark();

console.log(beagle.eat());

function Bird() {}

Bird.prototype.fly = function() {
  return "I am flying";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());
