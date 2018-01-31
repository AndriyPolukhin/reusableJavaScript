/*
function putIndex(arr, num)
{
    arr.push(num);
    arr.sort(
        function (a, b)
        {
            return a - b;
        }
    )
    function numIndex(e) 
    {
        return e >= num;
    }
    return arr.findIndex(numIndex);
}
*/

function putIndex(arr, num)
{
    arr.push(num);
    return arr.sort(function (a,b) { return a - b}).indexOf(num);
}

console.log(
    putIndex(
        [2,5,10], 15
    ),
    putIndex(
        [5,3,29,3], 5
    ),
    putIndex(
        [20,10,50,40,30], 35
    )
);