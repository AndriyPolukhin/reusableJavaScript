// XI Case Title

function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;

    else
        str = str.toString();

    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
}

console.log(sentenceCase('PHP exercise. python exercise.'));


// XII Count ocurances of substyring in a string

function count(main_str, sub_str) {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) {
        return main_str.length + 1;
    }
    subStr = sub_str.replace(/[.*+?^${}()[\]\\]/g, '\\$&');
    return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
}

console.log(count('The quick brown fox jumps over the lazy dog', 'the'));
console.log(count('The quick brown fox jumps over the lazy dog', 'fox', false));


// XII Create a ZERO filled value with optional +,- sign

function zeroFill(number, width, osign) {
    var num = '' + Math.abs(number),
        zerosw = width - num.length,
        sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosw)).toString().substr(1) + num;
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));


// XIII Createa a case-instantive search

function case_insensitive_search(str, search_str) {
    var result = str.search(new RegExp(search_str, 'i'));

    if (result > 0)
        return 'Matched';
    else
        return 'Not Matched';
}

console.log(case_insensitive_search('JavaScript Exercises', 'exercisies'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisies'));


// XIV Escape a HTML string

function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
        var chars_to_replace = {
            '&': '&',
            "<": '<',
            '>': '<',
            '"': '"'
        };
        return chars_to_replace[tag] || tag;
    });
}

console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
