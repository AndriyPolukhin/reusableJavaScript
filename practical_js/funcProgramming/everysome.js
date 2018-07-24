function checkPositive(arr) {
  // Add your code below this line

  function isPositive(el) {
    return el >= 0;
  }

  return arr.every(isPositive);

  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);

function checkPositive(arr) {
  // Add your code below this line

  function isPositive(el) {
    return el >= 0;
  }

  return arr.some(isPositive);
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
