/* globals twttr ga */
const weather = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      temp: 29,
      conditions: 'Sunny with Clouds',
    });
  }, 2000);
});

const tweets = new Promise((resolve) => {
  setTimeout(() => {
    resolve(['I like cake', 'BBQ is good too!']);
  }, 500);
});

Promise
  .all([weather, tweets])
  .then((responses) => {
    const [weatherInfo, tweetInfo] = responses;
    console.log(weatherInfo, tweetInfo);
  });

const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetCarsPromise])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then((responses) => {
    console.log(responses);
  });


ga.track();
twttr.trackCOnversion();

/* eslint-disabled */

if (!Array.prototype.includes) {
  /* eslint-disable no-extend-native */
  Array.prototype.includes = function (searchElement /* , fromIndex */) {
    /* eslint-enable no-extend-native */


    const O = Object(this);
    const len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    const n = parseInt(arguments[1], 10) || 0;
    let k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {
        k = 0;
      }
    }
    let currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}
/* eslint-enabled */
