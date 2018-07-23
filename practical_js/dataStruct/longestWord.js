function findLongestWordLength(str) {

    newstr = str.split(' ');

    let longestWord = 0;

    for(let i = 0; i < newstr.length; i++) {

        if (newstr[i].length > longestWord) {
            longestWord = newstr[i].length;
        }

    }


    console.log(longestWord);


}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

