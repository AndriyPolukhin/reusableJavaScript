function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

let ownProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);

function Bird(name) {
  this.name = name; // own property
}

Bird.prototype.numLegs = 2; // prototype property

let ducky = new Bird("Donald");

let ownPropys = [];
let prototypePropys = [];

for (let property in ducky) {
  if (ducky.hasOwnProperty(property)) {
    ownPropys.push(property);
  } else {
    prototypePropys.push(property);
  }
}

console.log(ownPropys); // prints ["name"];
console.log(prototypePropys); // prints ['numLegs"]

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  return candidate.constructor === Dog ? true : false;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat() {
    console.log(`Chow chow chow`);
  },
  describe() {
    console.log(`My name is ${this.name}`);
  }
};

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 2,
  eat() {
    console.log("chow chow chow");
  },
  describe() {
    console.log(`My name is ${this.name}`);
  }
};

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

Object.prototype.isPrototypeOf(Dog.prototype);
