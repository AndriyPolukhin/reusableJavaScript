function rot13(str) { // LBH QVQ VG!

    return str
        .split('')
        .map(
            function (x) {
                if (x.match(/\w/)) {
                    var z = x.charCodeAt(0) - 13 < 65 ? x.charCodeAt(0) - 13 + 26 : x.charCodeAt(0) - 13;
                    return String.fromCharCode(z);
                } else {
                    return x;
                }
            }
        ).join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
