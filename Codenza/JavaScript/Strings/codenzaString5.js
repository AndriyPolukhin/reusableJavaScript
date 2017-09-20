// XIX String to Array
string_to_array = function (str) {
    return str.trim().split(" ");
};

console.log(string_to_array('Robin Singh'));


// XX trailing white spaces
function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));

// XXi Repeat string a specific times

function repeat_string(string, count) {
    if ((string == null) || (count < 0) || (count === Infinity) || (count == null)) {
        return ('Error in string or count.');
    }
    count = count | 0;
    return new Array(count + 1).join(string);
}

console.log(repeat_string('a', 4.6));
console.log(repeat_string('a'));
console.log(repeat_string('a', -2));
console.log(repeat_string('a', Infinity));
