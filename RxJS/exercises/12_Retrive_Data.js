/**
 * DATA RETRIEVING
 * Ex.12: Retrive data using functions (3 levels deep)
*/

/**
 * @TODO: Retrieve id, title, and a 150x200 box art url for every video
 * you're not allowed to use indexers in any of the remaining exercises
 */

const movieLists = [
  {
    name: 'Instant Queue',
    videos: [
      {
        id: 70111470,
        title: 'Die Hard',
        boxarts: [
          { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard150.jpg' },
          { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/DieHard200.jpg' }
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        bookmark: []
      },
      {
        id: 654356453,
        title: 'Bad Boys',
        boxarts: [
          { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg' },
          { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg' }

        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: 'New Releases',
    videos: [
      {
        id: 65432445,
        title: 'The Chamber',
        boxarts: [
          { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg' },
          { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg' }
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 4.0,
        bookmark: []
      },
      {
        id: 675465,
        title: 'Fracture',
        boxarts: [
          { width: 200, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg' },
          { width: 150, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg' },
          { width: 300, height: 200, url: 'http://cdn-0.nflximg.com/images/2891/Fracture300.jpg' }
        ],
        url: 'http://api.netflix.com/catalog/titles/movies/70111470',
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];



const answer = movieLists
  .map(category => category.videos
    .map((i) => {
      const { id, title, boxarts } = i;


      const boxart = boxarts
        .filter(boxart => boxart.width === 150 && boxart.height === 200).map(i => i.url).concatAll();


      const a = [];
      a.push({ id, title, boxart });
      console.log(`This is a: ${a}`);

      return JSON.stringify(a);

    })).concatAll();

const answer2 = movieLists
  .map(movieList => movieList.videos
    .map(video => video.boxarts
      .filter(boxart => boxart.width === 150 && boxart.height === 200).map(boxart =>
        ({ id: video.id, title: video.title, boxart: boxart.url })
      )).concatAll()).concatAll();

console.log(answer2);
