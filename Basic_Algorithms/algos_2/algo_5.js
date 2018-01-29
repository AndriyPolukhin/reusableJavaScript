/*
function titleCase(str)
{
    let result = [];
    let strS = str.toLowerCase().split(' ');
    for (let i = 0; i < strS.length; i++)
    {
        let a = strS[i].replace(strS[i][0], strS[i][0].toUpperCase());
        result.push(a);
    }
    str = result.join(' ');
    return str;
}

console.log(titleCase("I'm a little tea pot"));
*/

/*
function titleCase(str)
{
    str = str.toLowerCase().split(' ');
    for(let i = 0; i < str.length; i++)
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

console.log(titleCase("hello there bEAUtifull"));

*/
/*
function titleCase(str)
{
    return str
    .toLowerCase()
    .split(' ')
    .map(function(w) {
        return (w.charAt(0).toUpperCase() + w.slice(1));
    }).join(' ');
}
console.log(titleCase('hello tHERE beaUTIFULL'));
*/

function titleCase(str)
{
    return str
                .toLowerCase()
                .split(' ')
                .map(function(w) {
                    return w.replace(w[0], w[0].toUpperCase());
                })
                .join(' ');
}
console.log(titleCase('heLLo thERE beaUTIFULL'));














