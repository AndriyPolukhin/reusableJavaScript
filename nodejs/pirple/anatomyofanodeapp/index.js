/*
* Title: Basic Node Example
* Description: Simple file that declares a few functions and invoks them
* Author:
* Date:
*
 */


// Dependencies.
const mathLib = require('./lib/math');
const jokesLib = require('./lib/jokes');

// App object.
const app = {};

// Configuration.
app.config = {
  timeBetweenJokes: 1000
};

// Function that prints a random joke
app.printAJoke = function () {

  // Get all the jokes.
  const allJokes = jokesLib.allJokes();

  // Ge the length of the jokes.
  const numberOfJokes = allJokes.length;

  // Pick a random number between 1 and the number of jokes.
  const randomNumber = mathLib.getRandomNumber(1, numberOfJokes);

  // Get the joke at that position in the array (minus one)
  const selectedJoke = allJokes[randomNumber - 1];

  // send the joke to the console.
  console.log(selectedJoke);
};

// Function that loops indefenetly, calling the printAJoke function.
app.indefiniteLoop = function () {

  // Create the interval, using the config variable defined above.
  setInterval(app.printAJoke, app.config.timeBetweenJokes);
};

// Invoke the loop.
app.indefiniteLoop();

