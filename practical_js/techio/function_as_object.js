matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function print_matrix(matrix, n) {
  for (let i = 0; i < n; ++i) {
    row = matrix[i];
    for (let i = 0; i < n; ++i) {
      console.log(row[i]);
    }
  }
}

// print_matrix(matrix, 3);

function myFunction() {
  console.log(myVar);
  var myVar = 3;
  console.log(myVar);
}

// myFunction();

var myObj = {
  name: 'John',
  sayName: function (name) {
    console.log('Hi, ' + this.name);
  }
};

// myObj.sayName();

function Car(name) {
  this.name = name;
}

var myCar = new Car('Subaru');
// console.log(myCar.name);

function summing() {
  var i;
  var total = 0;
  var n = arguments.length;
  for (i = 0; i < n; i++) {
    total += arguments[i];
  }
  return total;
}

// console.log(summing(1, 2, 3, 4));

const studentsAge = [17, 16, 18, 19, 21, 15];
const ableToDrink = studentsAge.filter(age => age > 18);
// console.log(ableToDrink);

const numbers = [2, 3, 4, 5];
const dollars = numbers.map(number => '$' + number);
// console.log(dollars);

const num = [5, 10, 15];
const total = num.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(total);

const emotions = ['happy', 'sad', 'angry'];
emotions.forEach(emotion => console.log(emotion));

const userPrivileges = ['user', 'user', 'user', 'admin'];
const containsAdmin = userPrivileges.some(element => element === 'admin');
// console.log(containsAdmin);

const ratings = [3, 5, 4, 3, 5];
const goodOverallRating = ratings.every(rating => rating >= 3);
// console.log(goodOverallRating);

const namesArray = ['sophie', 'waldo', 'george', 'stephen', 'henry'];
const includesWaldo = namesArray.includes('waldo');
// console.log(includesWaldo);

const newArray = Array.from('hello');
// console.log(newArray);
const doubleValues = Array.from([2, 4, 6], number => number * 2);
// console.log(doubleValues);

const icecreamColors = {
  chocolate: 'brown',
  vanilla: 'white',
  strawberry: 'red',
}

const colorsVal = Object.values(icecreamColors);
const colorsKey = Object.keys(icecreamColors);
// console.log(colorsVal);
// console.log(colorsKey);

const weather = {
  rain: 0,
  temperature: 24,
  humidity: 33,
}

const entries = Object.entries(weather);
// console.log(entries);

const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];
const combined = [...spreadableOne, ...spreadableTwo];
// console.log(combined);

const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];
const mammals = [...animals.slice(0, 3), ...animals.slice(4)];
// console.log(mammals);

const spreadableObject = {
  name: 'Robert',
  phone: 'iPhone'
};

const newObject = {
  ...spreadableObject,
  carModel: 'Volkswagen'
}

// console.log(newObject);

function displayArgumentsArray(...theArguments) {
  console.log(theArguments);
}

// displayArgumentsArray('hi', 'there', 'bud');

const frozenObject = {
  name: 'Robert'
}

Object.freeze(frozenObject);

frozenObject.name = 'Henry';
// console.log(frozenObject);

const sealedObject = {
  name: 'Robert'
}

Object.seal(sealedObject);
sealedObject.name = 'Bob';
sealedObject.wearsWatch = true;
// console.log(sealedObject);

const firstObject = {
  firstName: 'Robert'
}

const secondObject = {
  lastName: 'Cooper'
}

const combinedObject = Object.assign(firstObject, secondObject);
console.log(combinedObject);