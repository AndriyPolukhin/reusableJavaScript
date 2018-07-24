// 1. Create to functions for types of tea

const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";

// 2. Make a function that takes two parameters func and num
// Given the provided num of cups.
// two @param (function():string) for type of tea
// @param {number} for num of cups
// @return {Array<string>} of amount of tea

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 7);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 3);

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
