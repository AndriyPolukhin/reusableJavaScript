// VII Turn ASCII to HEXA

function ascii_to_hexa(str) {

    let arr = [];

    for (let n = 0, l = str.length; n < l; n++) {
        let hex = Number(str.charCodeAt(n).toString(16));
        arr.push(hex);
    }

    return arr1.join('');
}

console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));

// VIII. Turn Hexa into ASCII

function hex_to_ascii(strmain) {

    let hex = strmain.toString();
    let str = '';

    for (let n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));

// IX. Convert a string into an abbr.

abbr_name = function (str) {
    let split_names = str.trim().split(' ');
    if (split_names.length > 1) {
        return (split_names[0] + ' ' + split_names[1].charAt(0) + '.');
    }

    return split_names[0];
};

console.log(abbr_name('Robin Singh'));


// X. Camelize the string.

camelize = function camelize(str) {

    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}

console.log(camelize('JavaScript Exercises'));
console.log(camelize('JavaScript exercises'));
console.log(camelize('JavaScriptExercises'));
