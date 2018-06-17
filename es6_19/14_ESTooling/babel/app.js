const age = 100;
const people = ['Andriy', 'Anastasia'];

const fullName = people.map(name => `${name} Polukhin`);

for (const person of people) {
  console.log(person);
}

let {
  x,
  y,
  ...z
} = {
  x: 1,
  y: 2,
  a: 3,
  b: 4
};