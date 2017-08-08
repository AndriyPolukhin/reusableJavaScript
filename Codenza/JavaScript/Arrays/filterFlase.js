/* FILTER AND FALSE ELEMENTS*/
function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
}

function isEligible(value) {
    if (value !== false || value != null || value !== 0 || value !== "") {
        return value;
    }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


/* FIND THE NEEDED ELEMENTS */
function contains(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return true;
        }
    }
    return false;
}
var arr = [2, 5, 9, 6];

console.log(contains(arr, 5));
