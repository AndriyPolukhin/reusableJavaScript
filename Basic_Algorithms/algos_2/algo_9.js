function condenseWords(left, right)
{
    //console.log("Left:" + left, "Right:" + right);
    for (let i = 0; i < left.length; i++)
    {
        let leftSub = left.substring(i);
      //  console.log("This is leftSub:" + " i is " + i + " left.substring(" + i + ") is " + leftSub);
        if (right.startsWith(leftSub)) {
            return left + right.replace(leftSub, '');
        }
    }
    return null;
}
console.log(condenseWords('live', 'verses'));

function condenseSentence(str)
{
    const words = str.split(' ');
    console.log("This is words: " + words);
    for(let i = 0; i < words.length; i++){
        const left = words[i];
        const right = words[i + 1];
        const condensed = condenseWords(words[i], words[i + 1]);
        console.log("This is condensed: the words[i] is" + words[i] + " and words[i + 1] is " + words[i + 1]);
        if(condensed){
            words[i] = condensed;
            console.log("This is the words[i] " + words[i]);
            words.splice(i + 1, 1);
            i--;
        }
    }
    return words.join(' ');
}

console.log(condenseSentence('no one ever runs so often'));