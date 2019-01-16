let countChars = function (str) {
  // constant => 1
  let count = 0;
  // linear operation => length of the string => 5 / 14
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  // constant => 1
  return count;
};

countChars('walk');
let countChars2 = function (str) {
  // coustant + lenear
  return str.length;
};
console.log(countChars2('dance'));
countChars2('walkreallyfast');
let myList = ['hello', 'hola'];
myList.push('bounjour'); // constant
myList.unshift(); // constant
myList.shift('privet'); // linear

// calculate the time complexity for the
// native methods above (separately);
