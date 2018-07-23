function findElement(arr, func) {

    let nums = [];

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            nums.push(arr[i]);
        }
    }
    nums.sort((a, b) => {
        return a - b;
    });

    if (nums.length > 0) {
        return nums[0];
    }
    console.log(nums[0]);
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

findElement([1, 3, 5, 9], num => num % 2 === 0);

findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
});