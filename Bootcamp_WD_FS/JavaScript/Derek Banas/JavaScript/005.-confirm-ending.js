// Endwith algorithm

const confirmEnding = (str, target) => {
    const targetLength = target.length;
    const letters = str.substring(str.length - targetLength);

    if(letters === target) {
        str = true;
    } else {
        str = false
    }
    return str;
}

console.log(confirmEnding('Bastian', 'n'));