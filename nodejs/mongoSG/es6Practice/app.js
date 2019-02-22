
function startGame() {
  let counter = 0;
  document.querySelector('button').addEventListener('click', () => {
    ++counter;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (counter > 5) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });

}

startGame()
  .then(() => console.log('You win!'))
  .catch(() => console.log('You lost'));


/*
 setTimeout(() => {
    if (counter > 5) {
      console.log(`You won! Your clicks: ${counter} 🔥`);
    } else {
      console.log('You lost!');
    }
  }, 2000);
   */