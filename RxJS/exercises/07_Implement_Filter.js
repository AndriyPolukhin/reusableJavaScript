/**
 * IMPLEMENT FILTER
 * Ex.7: IMPLEMENTING ON A PROTOTYPE
 * Notice that, like map(), every filter() operation shares some operations in common:
1. Traverse the array
2. Add objects that pass the test to a new array
Why not abstract away how these operations are carried out?
*/

/**
 * @TODO: Implement filter on a prototype
 * Process:
 * 1. add filter function to the array type
 * 2. Include the predicate to filter the array
 */

Array.prototype.filter = function (predicateFunction) {
  var results = [];
  this.forEach(function (itemInArray) {
    if (predicateFunction(itemInArray)) {
      results.push(itemInArray);
    }
  });
  console.log(results);
  return results;
};

JSON.stringify([1, 2, 3].filter(function (x) { return x > 2 })) === "[3]"