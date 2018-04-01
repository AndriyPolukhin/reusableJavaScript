// Sort in an alphabetical order
// Using bult-in function split/sort/join
function alphabet_order(str)
{
    return str.split('').sort().join('');
}

console.log(alphabet_order("webmaster"));
