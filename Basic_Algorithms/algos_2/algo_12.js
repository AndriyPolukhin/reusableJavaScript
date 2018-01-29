/*
function slasher(arr, n)
{
    arr.splice(0, n);
    return arr;
}
console.log(slasher([1,2,4,5,6], 2));
*/

function slasher(arr, n)
{
    return arr.slice(n);

}
console.log(
    slasher([3,4,5,6,7],3)
);