/*
function destroy(arr)
{
    let r = arguments[0];
    let x = [];

        for(let i = 1; i < arguments.length; i++)
        {
            x.push(arguments[i]);
        }

        return r.filter(
            function(z) {
                for(let i = 0; i < x.length; i++)
                {
                    if(x[i] === z)
                    {
                        return false;
                    }
                }
                return true;
            }
        );
}

console.log(
    destroy(
        [1,2,3,4,5,6], 2, 3
    )
);
*/
/*
function destroy(arr, arrItem)
{
    return arr.filter(function(el) {
        return arrItem.indexOf(el) === -1;
    });
}
console.log(
    destroy(
        [1,3,5,3,true], [true, 3,4]
    )
);
*/
/*
function destroy(arr)
{
    let args = Array.from(arguments).slice(1);
    console.log(args);
    return arr.filter(function(val) {
        return !args.includes(val);
    });
}
console.log(
    destroy(
        ["tree", "hamburger", 53], "tree", 53
    )
);
*/
/*
function destroy(arr)
{
    let args = Array.prototype.slice.call(arguments);

    for(let i = 0; i < arguments.length; i++)
    {
        for(let j = 0; j < args.length; j++)
        {
            if(arr[i] === args[i])
            {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}
console.log(
    destroy(
        [43,23,21,45,23,32,35], 43,23,21,45
    )
);

*/
function destroyer(arr) {

    var args = Array.prototype.slice.call(arguments);

    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}
console.log("Expected [ \"hamburger\"]: " + destroyer(["tree", "hamburger", 53], "tree", 53));
