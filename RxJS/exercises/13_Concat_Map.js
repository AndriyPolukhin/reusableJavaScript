/**
 * IMPLEMENTATION
 * Ex.13: Implement concatMap()
*/

/**
 * @TODO: Implement concatMap();
 * create a concatMap function that's just a map operation, followed by a concatAll.
 * Process:
 * 1. Apply the projection funciton to each item
 * 2. This will return a child array
 * 3. It will create a two-demensional array
 */
Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return this.
    map(function (item) {
      return projectionFunctionThatReturnsArray(item);
    }).concatAll();
};

var spanishFrenchEnglishWord = [["cero", "rien", "zero"], ["uno", "un", "one"], ["dos", "deux", "two"]];
// Collect all the words for each number, in every language, in a signle, flat list
var allWords = [0, 1, 2].
  concatMap(function (index) {
    return spanishFrenchEnglishWord[index];
  });



JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
console.log(allWords);


