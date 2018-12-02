/**
 * REDUCING ARRAYS
 * Ex.18: Retrive Largest BoxArt
 * Let's try combining reduce() with map() to reduce multiple boxart objects to a single value: the url of the largest box art.
*/

const boxarts = [
  { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg' },
  { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' },
  { width: 300, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' },
  { width: 425, height: 150, url: 'http://cdn-0.nflximg.com/images/2891/Fracture425.jpg' }
];

/**
 * @TODO:
 * You should return an array containing only the URL of the largest box art.
 * Remember that reduce always returns an array with one item.
 */

// 1.Works
const a = boxarts
  .reduce(
    (acc, i) => (acc.width * acc.height > i.width * i.height ? acc.url : i.url)
  );

console.log(`this is a: ${a}`);




