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
