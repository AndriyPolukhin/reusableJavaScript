// validate NaN
function is_nan(val) {
    return val !== val;
}

console.log(is_nan(NaN));
console.log(is_nan('bar'));

// validate char

function is_char(value) {
    if (Object.prototype.toString.call(value) !== '[object String]')
        return false;
    return value && value.length === 1;
}

console.log(is_char('f'));
console.log(is_char('*'));

// validte null

function is_null(val) {
    return val === null;
}

console.log(is_null(null));
console.log(is_null('bar'));


// validate json

function is_json(value) {
    return toString.call(value) === '[object Object]';
}

console.log(is_json({
    name: 'Stephan'
}));
console.log(is_json('bar'));
console.log(is_json(72));
