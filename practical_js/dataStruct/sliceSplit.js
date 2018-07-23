function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  // let insert = arr1.slice().join(' ');
  // console.log(insert);
  // arr2.splice(n, 0, insert);


  let arrTemp = arr1.slice();
  arrTemp.reverse();
  let arrAns = arr2.slice();
  arrTemp.forEach((a) => arrAns.splice(n, 0, a));

  return arr2;
}

frankenSplice([1, 2, 3], [4, 5], 1)
frankenSplice([1, 2], ["a", "b"], 1)
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);

/*
console.log('Expected: ');
console.log([4, 1, 2, 3, 5]);
console.log(["a", 1, 2, "b"]);
console.log(["head", "shoulders", "claw", "tentacle", "knees", "toes"]);
*/