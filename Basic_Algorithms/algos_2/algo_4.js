/*
function find_lw(str)
{
    let re = /[\W]/;
    let strN = str.split(re);

    let arrStr = [];
    for (let i = 0; i < strN.length; i++)
    {
        arrStr.push(strN[i].length);
    }
    arrStr.sort(function(a,b) {
        return b - a;
    });
    return arrStr[0];
}
console.log(find_lw("The quick brown fox jumped over the lazy dog"));
*/

/*
// using a FOR loop
function find_lw(str)
{
    let strS = str.split(' ');
    let long_word = 0;
    for (let i = 0; i < strS.length; i++)
    {
        if(strS[i].length > long_word)
        {
            long_word = strS[i].length;
        }
    }
    return long_word;
}

console.log(find_lw("The quick brown fox jumped over the lazy dog"));
*/
/*
function find_lw(str)
{
    let long_word = str.split(' ').sort(function (a, b) {
        return b.length - a.length;
    });
    return long_word[0].length;
}
console.log(find_lw("The quick brown fox jumped over the lazy dog"));
console.log(find_lw("This seems like a good sentence"));
*/

function find_lw(str)
{
    let long_word = str.split(' ').reduce(function (long, curr_word) {
        return curr_word.length > long.length ? curr_word : long;
    }, "");
    return long_word.length;
}
console.log(find_lw("The quick brown fox jumped over the lazy dog"));