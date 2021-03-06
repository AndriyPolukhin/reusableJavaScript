/*
If you use async-await instead, you will have to wait for each promise to resolve sequentially, which may not be as efficient:
*/

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

  function rej(n) {
    const id = ++i
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject()
        console.log(`rej #${id} called after ${n} milliseconds`, Date.now() - start)
      }, n)
    })
  }

  try {
    const delay1 = res(3000)
    const delay2 = res(2000)
    const delay3 = rej(1000)

    const data1 = await delay1
    const data2 = await delay2
    const data3 = await delay3
  } catch (error) {
    console.log(`await finished`, Date.now() - start)
  }
}

example()


/*
rej #3 called after 1000 milliseconds 1002
res #2 called after 2000 milliseconds 2001
res #1 called after 3000 milliseconds 3001
await finished 3002
*/