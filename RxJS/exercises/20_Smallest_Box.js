/**
 * REDUCING ARRAYS
 * Ex.20: Retrive the data
 * This is a variation of the problem we solved earlier, where we retrieved the url of the boxart with a width of 150px. This time we'll use reduce() instead of filter() to retrieve the smallest box art in the boxarts array.
*/
var movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
          { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
          { width: 140, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "Thrillers",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
          { width: 130, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
          { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
          { width: 120, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
          { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];




const ans =
  movieLists
    .concatMap(movieList => movieList.videos
      .concatMap(video => video.boxarts
        .reduce((acc, curr) => (acc.width * acc.height < curr.width * curr.height) ? acc : curr)
        .map(boxart => ({ id: video.id, title: video.title, boxart: boxart.url }))));


console.log(ans);

const b = movieLists
  .concatMap(movieList => movieList.videos
    .concatMap(video => video.boxarts
      .reduce((acc, curr) => (acc.width * acc.height < curr.width * curr.height) ? acc : curr)
      .map(boxart => ({ id: video.id, title: video.title, boxart: boxart.url }))));

console.log(b);