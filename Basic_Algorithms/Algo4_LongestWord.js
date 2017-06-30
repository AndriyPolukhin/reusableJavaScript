// Algo 4 Find the Longest Word in a String
function findLongestWord(str) {
    var re = /[\W]/;
    var strnew = str.split(re);

    var intStr = [];
    for (var i = 0; i < strnew.length; i++) {
        intStr.push(strnew[i].length);
    }
    intStr.sort(function (a, b) {
        return b - a;
    });
    return intStr[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");


// Two more ways to check for a polindromes in JavaScript
