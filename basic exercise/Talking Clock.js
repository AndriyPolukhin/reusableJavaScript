// Chalenge # 321
// Print out the time as a string representation
const HOURS = [
    'tweleve',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven'
]

const ONES = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
]

const TEENS = [
    'ten',
    'eleven',
    'tweleve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
]

const TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'fourty',
    'fifty'
]


function talk(time) {

    const [h, m] = time.split(':').map(n => parseInt(n));
    const hours = HOURS[h % 12];
    const suffix = (h < 12) ? 'am' : 'pm';
    let minute = '';

    if (m < 10) {
        minute = `oh ${ONES[m]}`
    } else if (m < 20) {
        minute = `${TEENS[m % 10]}`
    } else {
        minute = `${TENS[Math.floor(m / 10)]} ${ONES[m % 10]}`
    }


    return ["It's", hours, minute, suffix]
        .join(' ');
}


console.log(talk('23:59'));
