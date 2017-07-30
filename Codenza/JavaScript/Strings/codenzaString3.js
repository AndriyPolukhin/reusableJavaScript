// XI

function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;

    else
        str = str.toString();

    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
}

console.log(sentenceCase('PHP exercise. python exercise.'));
