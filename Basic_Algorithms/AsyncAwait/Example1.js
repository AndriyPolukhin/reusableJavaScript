async function example() {
  const start = Date.now()
  let i = 0
  function res(n) {
    const id = ++i
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
        console.log(`res #${id} called after ${n} milliseconds`, Date.now() - start)
      }, n)
    })
  }
  const data = await Promise.all([res(3000), res(2000), res(1000)])
  console.log(`Promise.all finished`, Date.now() - start)
}

example()

/*
For the purposes of this answer I will be using some example methods:

res(ms) is a function that takes an integer of milliseconds and returns a promise that resolves after that many milliseconds.
rej(ms) is a function that takes an integer of milliseconds and returns a promise that rejects after that many milliseconds.
Calling res starts the timer. Using Promise.all to wait for a handful of delays will resolve after all the delays have finished, but remember they execute at the same time:

*/

/* CODE RETURNS

res #3 called after 1000 milliseconds 1003
res #2 called after 2000 milliseconds 2003
res #1 called after 3000 milliseconds 3002
Promise.all finished 3004

This means that Promise.all will resolve with the data from the inner promises after 3 seconds.
*/