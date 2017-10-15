function is_regexp(value) {
    return toString.call(value) === '[object RegExp]';
}

console.log(is_regexp(/test/));
console.log(is_regexp('bar'));
console.log(is_regexp(72));
