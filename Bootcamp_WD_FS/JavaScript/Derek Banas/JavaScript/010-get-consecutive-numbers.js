// find the sum of Any consecutive odd or even numbers that add up to a given number

const getCoefficientSum = (amount) => {
    let arr = [0];

    for (let i = 0; i < amount - 1; i++) {
        let index = arr[i];
        arr.push(index + 2);
    }
    const total = arr.reduce(function(sum, value) {
        return sum + value;
    }, 0);

    return total;
}

const getConsecutiveNumbers = (sum, amount) => {
    const coefficient = getCoefficientSum(amount);
    let x;
    const nums = [];
    x = ((sum - coefficient) / amount) - 2;

    for (let i = 0; i < amount; i++) {
        x += 2;
        nums.push(x);
    }

    const output = `Answer: ${nums.join(' + ')} = ${sum}`;
    return output;
}

console.log(getConsecutiveNumbers(84, 4));
console.log(getConsecutiveNumbers(-2, 8));