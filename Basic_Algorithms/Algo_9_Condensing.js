// Condensing sentences

/*
=================================
        My Answer
=================================
*/




/*
=================================
       Answer freecode camp
=================================
*/


// first problem to concat words
function condenseWords(left, right) {

    for (let i = 0; i < left.length; i++) {

        let leftSubstring = left.substring(i);

        if (right.startsWith(leftSubstring)) {
            return left + right.replace(leftSubstring, '');
        }
    }
    return null;
}

console.log(condenseWords('live', 'verses'));

// second problem

function condenseSentence(string) {

    const words = string.split(' ');

    for (let i = 0; i < words.length - 1; i++) {
        //        const left = words[i];
        //        const right = words[i + 1];
        const condensed = condenseWords(words[i], words[i + 1]);
        if (condensed) {
            words[i] = condensed;
            words.splice(i + 1, 1);
            i--;
        }

    }
    return words.join(' ');


}
console.log(condenseSentence('no one ever runs so often'));
console.log(condenseSentence('yellow low dog'));
console.log(condenseSentence('the black kettle is hot'));
console.log(condenseSentence('hello world'));
