// Factorialize a number
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

const factorialize = (num) => {
    if (num === 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

console.log(factorialize(5));

module.export = { factorialize};