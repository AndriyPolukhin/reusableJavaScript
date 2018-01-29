/*
function bouncer(arr)
{
    let arrA = [];
    let a;

    function filterFalse(value)
    {
        a = Boolean(value);
        if (a === true)
        {
            return a;
        }
        return a;
    }
    function filterIt(x) 
    {
        let y = filterFalse(x);
        if(y)
        {
            return true;
        } else {
            return false;
        }
    }
    arrA = arr.filter(filterIt);
    return arrA;
}

console.log(
    bouncer(
        [1, null, NaN, 2, undefined]
    )
);
*/

/*
function bouncer(arr)
{
    return arr = arr.filter(el => el);
}
console.log(
    bouncer(
        [1, NaN, null, 3, undefined]
    )
);
*/

function bouncer(arr)
{
    return arr.filter(Boolean);
}
console.log(
    bouncer(
        [1, NaN, null, 3, undefined]
    )
);



















