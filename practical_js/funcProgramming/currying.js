function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  };
}

curried(1)(2);

var funcForY = curried(1);
console.log(funcForY(2));

// Impartial function
function impartial(x, y, z) {
  return x + y + z;
}

var partialFn = impartial.bind(this, 1, 2);
let a = partialFn(10);
console.log(a);

function add(x) {
  // Add your code below this line
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };

  // Add your code above this line
}
add(10)(20)(30);
