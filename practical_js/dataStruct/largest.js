function largestOfFour(arr) {


    let largest = [];

    arr.forEach((a) => {

        a.sort(function (a, b) {
            return b - a;
        });

        largest.push(a[0]);

    });

    console.log(largest);

    //return arr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
