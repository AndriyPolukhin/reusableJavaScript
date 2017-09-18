// XV Find a word in a string

function search_word(text, word) {
    var x = 0,
        y = 0;

    for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
            for (j = i; j < i + word.length; j++) {
                if (text[j] == word[j - i]) {
                    y++;
                }
                if (y == word.length) {
                    x++;
                }
            }
            y = 0;
        }
    }
    return "'" + word + "' was found " + x + " times.";
}

console.log(search_word("the quick brown fox", 'fox'));
console.log(search_word("aa, bb, cc, dd, aa", 'aa'));

// XVI  unCapitalize Words

function unCapitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();
    });
}

console.log(unCapitalize_Words('Js String Exercises'));
console.log(unCapitalize_Words('Take It All To The Next Level'));


// XVII  unCapitalize first word

function Uncapitalize(str1) {
    return str1.charAt(0).toLowerCase() + str1.slice(1);
}

console.log(Uncapitalize('Js string exercises'));
console.log(Uncapitalize('This Is Something New'));

// XVIII unCapitalize Words

function unCapitalizeWords(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.substr(0).toLowerCase();
    });
}

console.log(unCapitalizeWords('JS EXERCISES STRINGS'));
console.log(unCapitalizeWords('THIS ALL WAS CAPITALIZE'));
