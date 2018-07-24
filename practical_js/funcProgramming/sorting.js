function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

let a = ascendingOrder([1, 5, 2, 3, 4]);

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}

let b = reverseAlpha(["l", "h", "z", "b", "s"]);

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a > b;
  });
}

let c = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

console.log(a, b, c);

let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return arr.concat([]).sort(function(a, b) {
    return a - b;
  });
}

let d = nonMutatingSort(globalArray);

console.log(d);
