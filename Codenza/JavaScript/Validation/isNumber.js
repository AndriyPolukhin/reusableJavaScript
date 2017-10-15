function is_number(value) {
    return !isNaN(value) && toString.call(value) === '[object Number]';
}

console.log(is_number(NaN));
console.log(is_number(42.32));
console.log(is_number(72));
