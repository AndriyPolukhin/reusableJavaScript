// VII Turn ASCII to HEXA

function ascii_to_hexa(str) {

    let arr1 = [];

    for (let n = 0, l = str.length; n < l; n++) {
        let hex = Number(str.charCodeAt(n).toString(16));
        arr1.push(hex);
    }

    return arr1.join('');
}

console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));

// VIII. Turn Hexa into ASCII

function hex_to_ascii(str1) {

    let hex = str1.toString();
    let str = '';

    for (let n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
