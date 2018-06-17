// Name Export should hold the name when imported
export const apiKey = 'abc123';

export const url = 'https://andriy.com';

export function sayHi(name) {
  console.log(`Hello ther ${name}`);
}


const age = 100;
const dog = 'ayax';
export {
  age as old,
  dog
};