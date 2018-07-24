Bird.prototype = {
  constructor: Bird,
  describe() {
    console.log(`My Name is ${this.name}`);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe() {
    console.log(`My name is ${this.name}`);
  }
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe() {
    console.log(`My name is ${this.name}`);
  }
};

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat() {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();

Bird.prototype = Object.create(Animal.prototype);

let sparrow = new Bird("Dre");
sparrow.eat();

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat() {
    console.log(`nom nom chom`);
  }
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog("Snoopy");
beagle.eat();

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
