/*
function largest(arr) 
{
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].sort((a,b) => b - a);
        result.push(arr[i][0]);
    }
    return result;
}

console.log(largest(
        [
            [1,4,2,5],
            [45,234,23,545],
            [4324,23423,1231,5345],
            [324,234,5453,2342]
        ]
    )
);
*/

/*
function largest(arr)
{
    let larNum = [0,0,0,0];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > larNum[i]) {
                larNum[i] = arr[i][j];
            }
        }
    }
    return larNum;
}

console.log(largest(
    [
        [34, 54, 23, 54],
        [76, 32, 45, 87],
        [47, 23, 54, 54],
        [94, 23, 15, 89]
    ]
));
*/
/*
function largest(mainArray)
{
    return mainArray
            .map(function (subArray) {
                return subArray
                    .reduce(function (previousLN, currentLN) {
                        return (currentLN > previousLN) ? currentLN : previousLN;
                    }, 0); // Default parameter for previousLN  
            });
}
*/
/*
function largest(arraysHolder)
{
    return arraysHolder
            .map(function (numbersHolder) {
                return numbersHolder
                    .reduce(function (defaultNumber, oneNumberFromNumbersHolder) {
                        return (oneNumberFromNumbersHolder > defaultNumber) ? oneNumberFromNumbersHolder : defaultNumber;
                    }, 0);
            });
}
console.log(largest(
    [ // arraysHolder
        [34, 54, 23, 54], // numbersHolder that contains oneNumberFromNumberHodler
        [76, 32, 45, 87],
        [47, 23, 54, 54],
        [94, 23, 15, 89]
    ]
));

*/

function largest(arr)
{
    return arr
            .map(function (subarr) {
                return Math.max.apply(null, subarr);
            });
}

console.log(
    largest(
        [
            [34,54,12,56],
            [76,98,21,87],
            [98,43,23,54],
            [87,57,43,98]
        ]
    )
);




























