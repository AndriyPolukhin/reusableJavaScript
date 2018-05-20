console.log('hello there');

const course = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242631RT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Roayl Blue';

// .startsWith()
course.startsWith('RFB');
course.startsWith('rfb');

flightNumber.startsWith('AC');
flightNumber.startsWith('AC', 3);
// .endsWith()
flightNumber.endsWith('jz');
accountNumber.endsWith('RT', 11);
// .inlcudes()
flightNumber.includes('AC');
flightNumber.includes('ac');
// .repeat()
make.repeat(10);


function leftPad(str, length = 20) {
    return `→  ${' '.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));