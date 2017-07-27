function rot13(str) { // LBH QVQ VG!


    var alpha = 'ABCDEFGHIJKLM';
    var beta = 'NOPQRSTUVWXYZ';
    var str2 = ''



    for (let i = 0; i < str.length; i++) {

        if (alpha.indexOf(i) !== -1) {
            let a = alpha.indexOf(i);
            console.log('The value of a is ' + a + ' and the value of beta.valueOf(a) is = ' + beta.valueOf(a));
            let a1 = beta.valueOf(a);
            str2 += a1;
        } else if (beta.indexOf(i) !== -1) {
            let b = beta.indexOf(i);
            console.log('The value of a is ' + a + ' and the value of beta.valueOf(a) is = ' + alpha.valueOf(b));
            let b1 = alpha.valueOf(b);
            str2 += b1;

        } else {
            str += ' ';
            console.log('Trouble');
        }

    }
    return str2;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
