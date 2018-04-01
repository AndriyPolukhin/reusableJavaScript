// Write a JS function that generates all combinations of a string.

// Create a function that takes a str as parameter
function substrings(str)
{

    // Create an empty array.
    var array = [];

    // Using a loop and a substring function.
    // add individual parts into an array
    for (var x = 0, y=1; x < str.length; x++, y++) 
    {
        array[x] = str.substring(x, y);
    }

    // Init an empty array.
    var combi = [];
    // Init a empty string.
    var temp = "";
    // new str with arr x 2
    var slen = Math.pow(2, array.length);

    // Using multiple loop's
    for (var i = 0; i < slen; i++)
    {
        temp = "";
        // Second loop.
        for (var j = 0; j < array.length; j++)
        {
            if ((i & Math.pow(2,j))) {
                temp += array[j];
            }
        }
        if (temp !== "")
        {
            combi.push(temp);
        }
    }
    // Add a new line after the loop run.
    console.log(combi.join("\n"));
}

substrings("dog");