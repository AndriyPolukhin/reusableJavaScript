// Largest number in an Array

const largestOfFour = (arr) => {
    let resultArr =[];

    for(let i = 0; i < arr.length; i++) {
        let highestNum  = 0;
        let innerArray = arr[i];

        for (let i = 0; i <innerArray.length; i++) {
            if(innerArray[i] > highestNum) {
                highestNum = innerArray[i];
            }
        }
        resultArr.push(highestNum);
    }
    return resultArr;
}

console.log(largestOfFour([[13, 27, 18, 25], [4, 5, 1, 3], [32, 35,37,39], [1000, 1001, 857, 1]]));

module.exports = { largestOffour };