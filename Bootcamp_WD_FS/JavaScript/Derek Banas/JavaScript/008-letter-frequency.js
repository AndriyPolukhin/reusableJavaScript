// count the number of times the letter appearce in a string

// version 2 refactored
const countletterFrequency = (str) => {
    const obj = {};
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, ""); // only letters, no spaces or characters

    for(let i = 0; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
    }
    return obj;
}

console.log(countletterFrequency('HELLO thre everyone!'));


// version 1

const countletterFrequency = (str) => {
    const obj = {};
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, "");


    for (let i = 0; i < str.length; i++ ){
        if(obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1;

        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}
