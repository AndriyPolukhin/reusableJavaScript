// Reverse a Number
// Built-in functions: split/reverse/join
function reverseAnumber(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(reverseAnumber(1234));