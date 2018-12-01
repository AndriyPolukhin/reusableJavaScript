/**
 * IMPLEMENTING FUNCTIONS
 * Ex.4: Implement map()
 * To make projections easier, let's add a map() function to the Array type. Map accepts the projection function to be applied to each item in the source array, and returns the projected array.
 * All array projections share two operations in common:
1. Traverse the source array
2. Add each item's projected value to a new array
*/

/**
 * @TODO: IMPLEMENT MAP
 * To make projections easier, let's add a map() function to the Array type. Map accepts the projection function to be applied to each item in the source array, and returns the projected array.
 */


Array.prototype.map = function (projectionFunction) {
  var results = [];
  /**
   * @TODO:
   * Apply the provided function to each item
   * Add each result to the result array
   * Use push()
   */

  this.forEach(itemInArray => results.push(projectionFunction(itemInArray)));

  console.log(result);
  return results;
};


JSON.stringify([1, 2, 3].map(function (x) { return x + 1; })) === '[2,3,4]'
