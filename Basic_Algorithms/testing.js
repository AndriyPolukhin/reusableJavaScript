function rot13(str) { // LBH QVQ VG!


    var re = /\W+/g;

    var a = 13,
        b = -13,
        c,
        d,
        strans = '';


    for (var i = 0; i < str.length; i++) {
        d = str.charCodeAt(i);
        if (d < 64) {
            c = String.fromCharCode(d);
            strans += c;
        } else if (d >= 65 && d <= 77) {
            c = String.fromCharCode(d + a);
            strans += c;
        } else if (d >= 78 && d <= 90) {
            c = String.fromCharCode(d + b);
            strans += c;
        }


    }

    return strans;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
