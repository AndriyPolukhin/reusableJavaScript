// Turn ASCII to HEXA
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
