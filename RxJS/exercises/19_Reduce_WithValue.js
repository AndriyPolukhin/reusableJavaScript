/**
 * REDUCING ARRAYS
 * Ex.19: Reduce with the Initial value
 * Sometimes when we reduce an array, we want the reduced value to be a different type than the items stored in the array.
 * Let's say we have an array of videos and we want to reduce them to a single map where the key is the video id and the value is the video's title.
*/

const videos = [
  {
    "id": 65432445,
    "title": "The Chamber"
  },
  {
    "id": 675465,
    "title": "Fracture"
  },
  {
    "id": 70111470,
    "title": "Die Hard"
  },
  {
    "id": 654356453,
    "title": "Bad Boys"
  }
];

const newVideos = videos
  .reduce((accumulatedMap, video) => {
    let obj = {};
    obj[video.id] = video.title;
    return Object.assign(accumulatedMap, obj);
  }, {});

console.log(newVideos);
