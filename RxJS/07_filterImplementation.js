Array.prototype.filter = function (predicateFunction) {
  var results = [];
  this.forEach(function (itemInArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------

    if (itemInArray > 2) {
      results.push(itemInArray);
    }

  });
  console.log(results);
  return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"