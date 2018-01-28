/*
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("Andriy and Anastasia Kiss"));
*/
/*
function reverseString(str) {
    var splitStr = str.split('');
    var reverseArr = splitStr.reverse();
    var joinArr = reverseArr.join('');

    return joinArr;
}

console.log(reverseString("Hello there Anastasia"));
*/
/*
function revStr(str) {
    return str.split('').reverse().join('');
}
console.log(revStr('Hello'));
*//*

function revStr(str)
{
    var newStr = '';
    for (let i = str.length - 1; i>=0; i--){
        newStr += str[i];
    }
    return newStr;
}
console.log(revStr('Hello'));
*/
/*
function revStr(str)
{
    if (str === '')
        return '';
    else
        return revStr(str.substr(1)) + str.charAt(0);
}
console.log(revStr('Howdy'));
*/

function revStr(str)
{
    return (str === '') ? '' : revStr(str.substr(1)) + str.charAt(0);
}
console.log(revStr('Recursion'));


























