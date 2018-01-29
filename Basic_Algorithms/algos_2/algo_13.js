/*
function mutation(arr)
{
    let test = arr[1].toLowerCase();
    console.log('This is test: ' + test);
    
    let target = arr[0].toLowerCase();
    console.log("This is target " + target);
    for(let i = 0; i < test.length; i++) {
        console.log(
            "This is indexOf:"
            + target.indexOf(test[i])
        );
        if(target.indexOf(test[i]) < 0)
            return false;
    }
    return true;
}
console.log(
    mutation(['hello', 'hey'])
);
*/

/*
function mutation(arr)
{
    return arr[1].toLowerCase()
        .split('')
        .every(function (letter) {
            return arr[0].toLowerCase()
                .indexOf(letter) != -1;
        });
}
console.log(
    mutation(
        ['hello', 'hey']
    )
);
*/

function mutation(arr)
{
    let a1 = arr[0].toLowerCase();
    let a2 = arr[1].toLowerCase();

    for (let i in a2.split('')) 
    {
        if(a1.indexOf(a2[i]) == -1)
        {
            console.log(a1 + "..." + a2);
            return false;
        }
    }
    return true;
}
console.log(
    mutation(
        ['hello', 'hey']
    )
);




















