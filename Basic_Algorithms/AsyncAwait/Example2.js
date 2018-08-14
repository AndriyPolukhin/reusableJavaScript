// But, Promise.all has a "fail fast" behavior:

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
    const data = await Promise.all([res(3000), res(2000), rej(1000)])
  } catch (error) {
    console.log(`Promise.all finished`, Date.now() - start)
  }
}

example()