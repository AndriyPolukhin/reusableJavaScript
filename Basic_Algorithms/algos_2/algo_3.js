
/*function pla(str)
{
    let re = /[\W_]/g;
    let lowStr = str.toLowerCase().replace(re, '');
    let revStr = lowStr.split('').reverse().join('');
    return revStr === lowStr;
}
console.log(pla("A man, a plan, a canal. Panama"));
*/

function pla(str)
{
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len / 2; i++)
    {
        if (str[i] !== str[len - 1 - i])
        {
            return false;
        }
    }
    return true;
}
console.log(pla("A man, a plan, a canal. Panama"));