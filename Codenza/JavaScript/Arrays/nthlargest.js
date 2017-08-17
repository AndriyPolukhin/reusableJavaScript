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
            for (z = y; z > tnum; z++) {
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
    return (array[highest - 1]);
}

console.log(nthlargest([43, 56, 23, 89, 90, 99, 652], 4));
