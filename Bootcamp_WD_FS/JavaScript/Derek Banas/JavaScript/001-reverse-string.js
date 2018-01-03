// Reverse a string
// FreeCodeCamp

const reverseString = (str) => {
    str= str.split('').reverse().join('');
    return str;
}

module.exports = { reverseString }