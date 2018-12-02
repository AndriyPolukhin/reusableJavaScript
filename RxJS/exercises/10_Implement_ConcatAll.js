/**
 * IMPLEMENTING CONTCAT
 * Ex.10: Implement concatAll()
 * Flattening trees with nested forEach expressions is easy because we can explicitly add items to the array. Unfortunately it's exactly this type of low-level operation that we've been trying to abstract away with functions like map() and filter(). Can we define a function that's abstract enough to express our intent to flatten a tree, without specifying too much information about how to carry out the operation?
*/

/**
 * @TODO: Implement concatAll()
 * Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.

 */

Array.prototype.concatAll = function () {
  const results = [];
  this.forEach((subArray) => {
    subArray.forEach(a => results.push(a));
  });
  console.log(results);
  return results;
};

JSON.stringify([[1, 2, 3], [4, 5, 6], [7, 8, 9]].concatAll()) === "[1,2,3,4,5,6,7,8,9]"

// [1, 2, 3].concatAll(); Throws and error It's a one-dimensional array