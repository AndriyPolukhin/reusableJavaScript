/*
function rot13(str)
{
    let a = 13,
        b = -13,
        c,
        d,
        strans = '';

        for(let i = 0; i < str.length; i++)
        {
            d = str.charCodeAt(i);
            if(d < 64)
            {
                c = String.fromCharCode(d);
                strans += c;
            } else if (d >= 65 && d <= 77)
            {
                c = String.fromCharCode(d + a);
                strans +=c;
            } else if (d >= 78 && d <= 90)
            {
                c = String.fromCharCode(d + b);
                strans += c;
            }
        }
        return strans;
}
*/

function rot13(str)
{
    return str
                .split('')
                .map(
                    function (a)
                    {
                        if(a.match(/\w/))
                        {
                            let b = a.charCodeAt(0) - 13 < 65 ? a.charCodeAt(0) - 13 + 26 : a.charCodeAt(0) - 13;
                            return String.fromCharCode(b);
                        } else 
                        {
                            return a;
                        }
                    }
                )
                .join('');
}

console.log(
    
    "Cyphering: " +
    rot13(
        "MARY ANASTASIA TSUKROVA"
    ),
    "Decrypting: " +
    rot13(
        "ZNEL NANFGNFVN GFHXEBIN"
    )
);