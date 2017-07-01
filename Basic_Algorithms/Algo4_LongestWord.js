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

// I. Find the Longest Word With a FOR Loop
// Using split();


function findLongestWord(str) {

    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = 'The quick brown fox jumped over the lazy dog'.split(' ');
    // var strSplit = ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'];

    // Step 2. Initiate a variable that will hold the length of the longest word
    var longestWord = 0;

    // Step 3. Create the FOR loop
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            // If strSplit[i].length is greater than the word it is compared wirh...
            // ... the longestWord takes this new value
            longestWord = strSplit[i].length;
        }
    }
    /* Here strSplit.length = 9
     For each iteration: i = ?   i < strSplit.length?   i++  if(strSplit[i].length > longestWord)?   longestWord = strSplit[i].length
     1st iteration:        0             yes             1   if("The".length > 0)? => if(3 > 0)?     longestWord = 3
     2nd iteration:        1             yes             2   if("quick".length > 3)? => if(5 > 3)?   longestWord = 5   
     3rd iteration:        2             yes             3   if("brown".length > 5)? => if(5 > 5)?   longestWord = 5   
     4th iteration:        3             yes             4   if("fox".length > 5)? => if(3 > 5)?     longestWord = 5  
     5th iteration:        4             yes             5   if("jumped".length > 5)? => if(6 > 5)?  longestWord = 6 
     6th iteration:        5             yes             6   if("over".length > 6)? => if(4 > 6)?    longestWord = 6 
     7th iteration:        6             yes             7   if("the".length > 6)? => if(3 > 6)?     longestWord = 6
     8th iteration:        7             yes             8   if("lazy".length > 6)? => if(4 > 6)?    longestWord = 6 
     9th iteration:        8             yes             9   if("dog".length > 6)? => if(3 > 6)?     longestWord = 6 
     10th iteration:       9             no               
     End of the FOR Loop*/

    // Step 4. Return the longest word
    return longestWord;
    // returns a number e.g. 6
}

findLongestWord('The quick brown fox jumped over the lazy dog');

// Short:

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
findLongestWord('The quick brown fox jumped over the lazy dog');

// II. Find the Longest Word With the sort() Method


function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

    // Step 2. Sort the element in the array
    var longestWord = strSplit.sort(function (a, b) {
        return b.length - a.length;
    });

    /* Sorting process
    a           b            b.length     a.length     var longestWord
  "The"      "quick"            5            3         ["quick", "The"]
  "quick"    "brown"            5            5         ["quick", "brown", "The"]  
  "brown"    "fox"              3            5         ["quick", "brown", "The", "fox"]
  "fox"      "jumped"           6            3         ["jumped", quick", "brown", "The", "fox"]
  "jumped"   "over"             4            6         ["jumped", quick", "brown", "over", "The", "fox"]
  "over"     "the"              3            4         ["jumped", quick", "brown", "over", "The", "fox", "the"]
  "the"      "lazy"             4            3         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the"]
  "lazy"     "dog"              3            4         ["jumped", quick", "brown", "over", "lazy", "The", "fox", "the", "dog"]
  */

    // Step 3. Return the length of the first element of the array
    return longestWord[0].length;
    // var longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
    // longestWord[0]="jumped" => jumped".length => 6
}

findLongestWord('The quick brown fox jumped over the lazy dog');

// Short:
function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


// III. Find the Longest Word With the reduce() Method

function findLongestWord(str) {

    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

    // Step 2. use the reduce method
    var longestWord = strSplit.reduce(function (longest, currentWord) {
        if (currentWord.length > longest.length)
            return currentWord;
        else
            return longest;
    }, "");

    /* Reduce process
  currentWord      longest       currentWord.length     longest.length    if(currentWord.length > longest.length)?   var longestWord
  "The"             ""                  3                     0                              yes                          "The"
  "quick"           "The"               5                     3                              yes                         "quick"
  "brown"           "quick"             5                     5                              no                          "quick"
  "fox"             "quick"             3                     5                              no                          "quick"
  "jumped"          "quick"             6                     5                              yes                         "jumped"
  "over"            "jumped"            4                     6                              no                          "jumped"
  "the"             "jumped"            3                     6                              no                          "jumped"
  "lazy"            "jumped"            4                     6                              no                          "jumped"
  "dog"             "jumped"            3                     6                              no                          "jumped"
  */

    // Step 3. Return the length of the longest
    return longestWord.length;
    // var longestWord = 'jumped'
    // longestWord.length => 'jumped'.length => 6;

}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Short:


function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function (longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;

    }, "");
    return longestWord.length;
}
findLongestWord('The quick brown fox jumped over the lazy dog');
