//https://habrahabr.ru/post/333372/?utm_source=fb&utm_medium=social&utm_campaign=[perevod]-revers-inzhiniring-odnoy-strochk


document.write("<pre id=p></pre>");
const DELAY = 64; // approximately 15 frames per second 15 frames per second * 64 seconds = 960 frames
var n = 1;
var p = document.getElementById("p");
// var draw = "for(n+=7,i=delay,P='p.\\n';i-=1/delay;P+=P[i%2?(i%2*j-j+n/delay^j)&1:2])j=delay/i;p.innerHTML=P";

/**
 * Draws a picture
 * 128 chars by 32 chars = total 4096 chars
 */
var draw = function () {
    var i = DELAY; // 64
    var P = 'p.\n'; // First line, reference for chars to use
    var j;

    n += 7;

    while (i > 0) {

        j = DELAY / i;
        i -= 1 / DELAY;

        let index;
        let iIsOdd = (i % 2 != 0);

        if (iIsOdd) {
            let magic = ((i % 2 * j - j + n / DELAY) ^ j); // < ------------------
            let magicIsOdd = (magic % 2 != 0); // &1
            if (magicIsOdd) { // &1
                index = 1;
            } else {
                index = 0;
            }
        } else {
            index = 2;
        }

        switch (index) { // P += P[index];
            case 0:
                P += "p"; // aka P[0]
                break;
            case 1:
                P += "."; // aka P[1]
                break;
            case 2:
                P += "\n"; // aka P[2]
        }
    }
    //Update HTML
    p.innerHTML = P;
};

setInterval(draw, 64);


// https://www.desmos.com/calculator
//   y = mod(i,2) * 64/i - 64/i
//   y = 64/i
