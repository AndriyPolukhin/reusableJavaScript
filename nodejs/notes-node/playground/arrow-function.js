const square = a => a * a;
console.log(square(9));

let user = {
  name: 'Andriy',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi Alt. I'm ${this.name}`)
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);