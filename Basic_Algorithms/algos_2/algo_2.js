/*
function factor(num) 
{
    // Check if num is != 0
    if(num == 0)
    {
        return 1;
    }
    // Create a box for numbers
    var arr = [];
    // Use a while loop to populate the arr
    var i = 1;
    while(i <= num + 1) {
        // push the i to arr
        arr.push(i);
        i++;
    }
    // Now for the multiplication with reduct
    var newArr = arr.reduce(function(a, b) {
        return a * b;
    });
    return newArr;
}
console.log(factor(5));
*/
/*
function fact(x)
{
    if(x === 0)
    {
        return 1;
    }

    var arr = [];
    var i = 1;
    while(i <= x)
    {
        arr.push(i);
        i++;
    }
    return arr.reduce(function(a,b) { return a * b; });
}
console.log(fact(5));
*/


// Recursion is a good options here
/*
function fact(x)
{
    if(x < 0)
        return -1;
    else if (x === 0)
        return 1;
    else
        return (x * fact(x - 1));
}
console.log(fact(6));
*/

/*
// While loop
function fact(x)
{
    let res = x;
    if (x === 0 || x === 1)
        return 1;
    while(x > 1) {
        x--;
        res *= x;
    }
    return res;
}
console.log(fact(7));
*/

// For Loop
function fact(a)
{
    if (a === 0 || a === 1)
        return 1;
    for (let i = a - 1; i >= 1; i--)
    {
        a *= i;
    }
    return a;
}
console.log(fact(5));




