/**
 * REDUCING ARRAYS
 * Ex.17: Retrive Largest Rating
 * Let's use our new reduce function to isolate the largest value in an array of ratings.
*/

/**
 * @TODO: Let's use our new reduce function to isolate the largest value in an array of ratings.
 * You should return an array containing only the largest rating. Remember that reduce always returns an array with one item.
 */


const ratings = [2, 3, 6, 1, 4, 5];

const a = ratings.
  reduce((e, i) => e > i ? e : i);

const b = ratings.reduce((acc, curr) => {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});

console.log(`This is a: ${a}`);
console.log(`This is b: ${b}`);

