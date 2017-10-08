/*
While Loops Problem Set
1. Print all numbers between -10 and 19;
2. Print all numbers between 10 and 40;
3. Print all odd numbers between 300 and 333;
4. Print all numbers divisible by 5 and 3 between 5 and 50;
*/

// Solution to problem 1
var num = -10;
while (num < 20) {
    console.log(num);
    num++;
}

// Solution to problem 2
var x = 10;
while (x < 40) {
    if (x % 2 === 0) {
        console.log(x);

    }
    x++;
}
// Solution to problem 3

var y = 300;
while (y < 333) {
    if (y % 2 === 1) {
        console.log(y);
    }
    y++;
}

// Solution to problem 4
var z = 5;
while (z < 50) {
    if (z % 5 === 0 && z % 3 === 0) {
        console.log(z);
    }
    z++;
}
