function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
const sliced = sliceArray(inputAnim, 1, 5);
console.log(sliced);

function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

let first = [1, 2, 3];
let second = [4, 5];

let a = nonMutatingConcat(first, second);

console.log(a);

function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}

// let first = [1, 2, 3];
// let second = [4, 5];
let b = nonMutatingPush(first, second);
console.log(b);
