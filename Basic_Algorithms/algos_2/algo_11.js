/*
function chunk(arr, size)
{
    console.log(
        "Log original arr " + arr,
        "Log original size " + size
    );
    let arrA = [];
    for (let i = 0; i < arr.length; i+=size) {
        let barr = arr.slice(i, i + size);
        console.log(
            "Log barr progress: " + barr
        );
        arrA.push(barr);
        console.log(
            "Log arrA progress: " + arrA
        );
    }
    return arrA;
}
console.log(
    chunk([0,2,4,5,1,5,6,7], 4)
);
*/
/*
function chunk(arr, size)
{
    let arrA = [];
    while (arr.length) {
        arrA.push(arr.splice(0, size));
    }
    return arrA;
}
console.log(
    chunk(
        [2,3,4,5,6,1,6,53,], 3)
    );
*/

























