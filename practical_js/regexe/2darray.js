function zeroArray(m,n) {
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        newArray.push(row);
        row = [];
    }
    return newArray;

}

let matrix = zeroArray(3,2);
console.log(matrix);
