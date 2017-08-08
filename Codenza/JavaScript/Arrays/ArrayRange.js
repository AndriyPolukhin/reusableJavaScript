// Set array range
function array_range(start, len) {

    var arr = new Array(len);

    for (var i = 0; i < len; i++, start++) {
        arr[i] = start;
    }

    return arr;
}

console.log(array_range(1, 4));
console.log(array_range(-6, 4));

// Set te range Between

function rangeBetwee(start, end) {

    if (start > end) {

        var arr = new Array(start - end + 1);

        for (var i = 0; i < arr.length; i++, start--) {
            resarrult[i] = start;
        }
        return arr;
    } else {
        var arro = new Array(end - start + 1);

        for (var j = 0; j < arro.length; j++, start++) {
            arro[j] = start;
        }
        return arro;
    }
}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

// Random Item
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];

}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));


// Largest number from an array


function nthlargest(array, highest) {
    var x = 0,
        y = 0,
        z = 0,
        temp = 0,
        tnum = array.length,
        flag = false,
        result = false;

    while (x < tnum) {
        y = x + 1;

        if (y < tnum) {

            for (z = y; z < tnum; z++) {

                if (array[x] < array[z]) {
                    temp = array[z];
                    array[z] = array[x];
                    array[x] = temp;
                    flag = true;
                } else {
                    continue;
                }
            }
        }

        if (flag) {
            flag = false;
        } else {
            x++;
            if (x === highest) {
                result = true;
            }
        }

        if (result) {
            break;
        }
    }
    return (array[(highest - 1)]);
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652]));
