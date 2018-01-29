/*
function confirmEnd(str, target)
{
    let a = str.substring(str.length - target.length);
    return (a === target) ? true : false;
}
*/
/*
function confirmEnd(str, target)
{
    if (str.substr(-target.length) === target) {
        return true;
    } else {
        return false;
    }
}
*/
/*
function confirmEnd(str, target)
{
    return (str.substr(-target.length) === target) ? true : false;
}
*/
function confirmEnd(str, target)
{
    return str.endsWith(target);
}

console.log(
    confirmEnd('Anastasia', 'sia')
);