// I. A;phabetize a string
function alphabetize_string(str) {

    return str.split('').sort().join('').trim();
}
console.log(alphabetize_string('United States'));

// II. Capitalize Words

function capitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.substring(0).toUpperCase();
    });
}
console.log(capitalizeWords('js string exercises'));

// III. EndWith :::> Check if a str ends with a suffix

function string_endsWith(str, suffix) {

    if (((str === null) || (str === '') || (suffix === null) || (suffix === ''))) {
        return false;
    } else {
        str = str.toString();
        suffix = suffix.toString();
    }
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));
console.log(string_endsWith('JS PHP PYTHON', ''));

// IV.  Check if the string is blank or not

is_Blank = function (input) {
    if (input.length === 0)
        return true;
    else
        return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));


// V. Check is a str is an actual string or not

is_string = function (input) {
    if (Object.prototype.toString.call(input) === '[object String]')
        return true;
    else
        return false;
};

console.log(is_string('anastasia'));
console.log(is_string(1, 2, 3, 4, 5));


// VI. Chop a string into a specific size

string_chop = function (str, size) {
    if (str === null) return [];
    str = String(str);
    size = ~~size;
    return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];

}

console.log(string_chop('anastasia'));
console.log(string_chop('anastasia', 2));
console.log(string_chop('anastasia', 3));
