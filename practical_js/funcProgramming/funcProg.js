// Tea preparation

const prepareTea = () => "slim diet tea";

// 1. get given number of tea
// 2. as a @param {number} for num of cups of tea
// 3. return an Array<strings> with the given amount of tea

const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(5);

console.log(tea4TeamFCC);
