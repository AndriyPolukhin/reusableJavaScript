/**
 * WORKING WITH ARRAYS
 * Ex.3: Projecting an Array
 * Applying a function to a value and creating a new value is called a projection. To project one array into another, we apply a projection function to each item in the array and collect the results in a new array.
*/

/* INITIAL DATA aka json table */
(function () {

  const newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id: 432534, time: 65876586 }]
    }
  ];

  /* Output Array */
  let videoAndTitlePairs = [];

  /**
   * @TODO: Project an array of videos into an array of {id,title} pairs using forEach()
   * Use forEach function to accumulate {id, title} pairs from each video
   * Put the results into the videoAndTitleParis arrays using the Array's push() method.
   */

  // console.log(newReleases);

  newReleases.forEach((item) => {
    const { id, title } = item;

    console.log(`The item id: ${id} and the title: ${title}`);
    videoAndTitlePairs.push({ id, title });

  });



  console.log(videoAndTitlePairs);
  return videoAndTitlePairs;

})();

