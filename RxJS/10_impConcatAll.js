Array.prototype.concatAll = function () {
  let results = [];
  this.forEach(function (subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------

    subArray.forEach(function (item) {
      results.push(item);
    });

  });

  console.log(results);

  return results;
};


JSON.stringify([
  [1, 2, 3],
  ["hello", "hello", "hello"],
  [4, 5, 6]
].concatAll());

/*
JSON.stringify([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array

*/