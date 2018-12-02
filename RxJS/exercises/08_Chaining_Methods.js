/**
 * Chaining Methods
 * Ex.8: Chaing filter and map together
 * Like map(), filter() lets us express what data we want without requiring us to specify how we want to collect the data.
*/

/**
 * @TODO: Chain filter and map to collect the ids of videos that have a rating of 5.0

 */

const newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 4.0,
    bookmark: []
  },
  {
    'id': 654356453,
    title: 'Bad Boys',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': 5.0,
    bookmark: [{ id: 432534, time: 65876586 }]
  },
  {
    'id': 65432445,
    title: 'The Chamber',
    boxart: 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    uri: 'http://api.netflix.com/catalog/titles/movies/70111470',
    rating: 4.0,
    bookmark: []
  },
  {
    id: 675465,
    'title': 'Fracture',
    boxart: 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': 5.0,
    'bookmark': [{ id: 432534, time: 65876586 }]
  }
];

const answer = newReleases.filter(video => video.rating === 5.0).map(video => video.id);

console.log(answer);
