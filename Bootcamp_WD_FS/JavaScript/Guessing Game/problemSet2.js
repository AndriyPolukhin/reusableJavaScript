/*
While Loops Problem Set
1. Print all numbers between -10 and 19;
2. Print all even numbers between 10 and 40;
3. Print all odd numbers between 300 and 333;
4. Print all numbers divisible by 5 and 3 between 5 and 50;
*/

// Solution to problem 1
for (var i = -10; i < 20; i++) {
    console.log(i);
}



// Solution to problem 2

for (var i = 10; i <= 40; i += 1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Solution to problem 3

for (var i = 301; i <= 333; i = i + 2) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}



// Solution to problem 4
for (var i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
