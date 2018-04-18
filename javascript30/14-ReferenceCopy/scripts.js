// start with strings, numbers and booleans
/*
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'andriy';
let name2 = name;
console.log(name, name2);
name = "ninja coder";
console.log(name, name2);
*/
// Let's say we have an array
const players = ['Andriy', 'Anastasia', 'Alexandra', 'Olga'];

// and we want to make a copy of it.
const team = players;

// console.log(players, team);
// You might think we can just do something like this:
team[1] = "Nastena";
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "Olenka";
// console.log(team4);

const team5 = Array.from(players);
team5[2] = "Alex2";
// console.log(team5);
// console.log(players);


// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Andriy Polukhin',
    age: 32
};

 // and think we make a copy:
const captain = person;
captain.age = 99;
// console.log(person);
// console.log(captain);
// how do we take a copy instead?
const cap2 = Object.assign({}, person, {age: 145, number: 20000000000});
// console.log(cap2);

// We will hopefully soon see the object ...spread

const cap3 = {...person};
console.log(cap3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.


const andriy = {
    name: "Andriy",
    age: 145,
    social: {
        twitter: '@andriypolukhin',
        facebook: 'andriy.polukhin'
    }
}
console.clear();
console.log(andriy);

const dev = Object.assign({}, andriy);
console.log(dev);


const dev2 = JSON.parse(JSON.stringify(andriy));
