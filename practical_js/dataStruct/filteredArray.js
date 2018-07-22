function filteredArray(arr, elem) {


    console.log("Starting Array: ", arr);

    console.log("Element : ", elem)

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i]);

        if (arr[i].indexOf(elem) === -1) {

            newArr.push(arr[i]);
            console.log(`This is the arr[i] : ${arr[i]}`);


        }


    }
    console.log(newArr);

    return newArr;
}

console.log(filteredArray(
[
    [3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]
], 3));

console.log(filteredArray(
    [
        ["amy", "beth", "sam"], ["dave", "sean","peter"]
    ]
,"peter"))
