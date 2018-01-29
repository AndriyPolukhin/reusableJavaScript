/*
function repeat(str, num)
{
    if (num < 0)
        return "";
    return str.repeat(num);
}

console.log(repeat("aba", 3));
*/
/*
function repeat(str, t)
{
    let rS = "";
    while(t > 0)
    {
        rS += str;
        t--;
    }
    return rS;
}
console.log(repeat("Nastena! ", 6));
*/
/*
function repeat(str, t)
{
    if(t < 0)
        return "";
    else if(t === 1)
        return str;
    else
        return str + repeat(str, t - 1);
}
console.log(
    repeat("Andriy got a check for $10000 dollars this month", 514));
*/
/*
function repeat(str, t)
{
    if(t > 0)
        return str.repeat(t);
    else
        return "";
}

console.log(repeat('Andriy Maried Anastasia', 1));
*/

function repeat(str, t)
{
    return t > 0 ? str.repeat(t) : "";
}
console.log(repeat("Andriy and Anastasia Kissed ", 5000));