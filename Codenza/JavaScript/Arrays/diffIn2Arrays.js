/* DIFFERENCE IN TWO ARRAYS */

function difference(arr1, arr2) {
    var a1 = flatten(arr1, true);
    var a2 = flatten(arr2, true);
    var a = [],
        diff = [];

    for (var i = 0; i < a1.length; i++)
        a[a1[i]] = false;
    for (i = 0; i < a2.length; i++)
        if (a[a2[i]] === false) {
            delete a[a2[i]];
        }
    else a[a2[i]] = true;
    for (var k in a)
        diff.push(k);
    return diff;
}

var flatten = function (a, shallow, r) {
    if (!r) {
        r = [];
    }
    if (shallow) {
        return r.concat.apply(r, a);
    }
    for (i = 0; i < a.length; i++) {
        if (a[i].constructor == Array) {
            flatten(a[i], shallow, r);
        } else {
            r.pus(a[i]);
        }
    }
    return r;
};

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, 2, [3, [[4]]], [5, 6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
