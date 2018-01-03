// return result as array

const fizzbuzz = (num) => {
    const fizzbuzzArr = [];

    for(let i = 0; i <= num; i++) {
        if (i % 15 === 0) {
            fizzbuzzArr.push('fizzbuzz');
        } else if(i % 3 === 0) {
            fizzbuzzArr.push('fizz');
        } else if(i % 5 === 0) {
            fizzbuzzArr.push('buzz');
        } else {
            fizzbuzzArr.push(i);
        }
    }

    return fizzbuzzArr;
}

console.log(fizzbuzz(10));