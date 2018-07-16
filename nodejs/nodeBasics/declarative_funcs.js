const createPerson = (name, age, gender) => {
"use strict";
return {
  name,
  age,
  gender
  };
}
createPerson("Andriy Polukhin", 32, "enginner")
const person = {
name: "Taylor",
sayHello: function() {
  return `Hello! My name is ${this.name}.`;
  }
};
person
person.sayHello()
const oneMorePerson = {
name: "Andriy Polukhin",
sayHello() {
  return `Hello! My name is ${this.name}.`;
  }
};
oneMorePerson
oneMorePerson.sayHello()
const bicycle = {
gear: 2,
setGear(newGear) {
  "use strict";
  this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
