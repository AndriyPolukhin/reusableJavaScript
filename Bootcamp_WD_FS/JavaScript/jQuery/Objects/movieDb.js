/* MOVIE DB

Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties. Iterate through the array and print our somethig that looks like:

You have watched "In Bruges" - 5 stars
You have not seen "Frozen" - 4.5 stars
You have seen "Mad Max Fury Road" - 5 stars
You have not seen "Les Miserables" - 3.5 stars

USE YOUR OWN MOVIEW

*/


var myMovieDB = [
    {

        title: "Highlander",
        rating: "5 stars",
        hasWatched: true
},
    {
        title: "Odessey 2001",
        rating: "4.5 stars",
        hasWatched: false

},
    {
        title: "Jean Fresco Manifest for the Venus",
        rating: "5 stars",
        hasWatched: false

}, {
        title: "Blade Runner 2049",
        rating: "4.7 stars",
        hasWatched: true

}];

function myMovies() {
    myMovieDB.forEach(function (movie) {
        if (movie.hasWatched === true) {
            console.log("You have seen " + movie.title + " and rated the movie with " + movie.rating + "!");
        } else {
            console.log("You have not seen " + movie.title + "  the movie rating is " + movie.rating + ".");
        }
    })
}

myMovies();
