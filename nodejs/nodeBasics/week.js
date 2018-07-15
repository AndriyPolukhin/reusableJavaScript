// WEEK SPREEDSHEET CALCULATIONS
//
// 1. Collect two day's worth of tasks.
// 2. Convert the task duration to hours, instead of minutes
// 3. Filter out everything that took two hours or more.
// 4. Sum it all up.
// 5. Multiply the result by a per-hour rate for billing.
// 6. Output a formatted dollar amount.

const monday = [
    {
        'name': 'Write a tutorial',
        'duration': 180
    },
    {
        'name': 'Some web development',
        'duration': 120
    }
];

const tuesday = [
    {
        'name': 'Keep writing that tutorial',
        'duration': 240
    },
    {
        'name': 'Some more web development',
        'duration': 180
    },
    {
        'name': 'A whole lot of nothing',
        'duration': 240
    }
];

const tasks = [monday, tuesday];

let result = tasks.reduce(function (accumulator, current) {
    return accumulator.concat(current);
}).map(function (task) {
    return (task.duration / 60);
}).filter(function (duration) {
    return duration >= 2;
}).map(function (duration) {
    return duration * 25;
}).reduce(function (accumulator, current) {
    return [(+accumulator) + (+current)];
}).map(function (dollar_amount) {
    return '$' + dollar_amount.toFixed(2);
}).reduce(function (formatted_dollar_amount) {
    return formatted_dollar_amount;
});

console.log(tasks);
console.log(result);


// 1. Concatenate our 2D array into a single list
let payment = tasks.reduce((acc, current) => acc.concat(current))
// 2. Exttract the task duraction, and convert minutes to hours
    .map((task) => task.duration / 60)
// 3. Filter out any task that took less than two hours
    .filter((duration) => duration >= 2)
// 4. Multiply each task's duration by our hourly rate of 25
    .map((duration) => duration * 25)
// 5. Combine the sums into a single dollar amount
    .reduce((acc, current) => [(+acc) + (+current)])
// 6. Convert to a "pretty-printed" dollar amount
    .map((amount) => '$' + amount.toFixed(2))
// 7. Pull out the only element of the array we got from map
    .reduce((formatted_amount) => formatted_amount);

console.log(`The Payment is ${payment}`);


// ALTERNATIVE WITH A FOREACH
let concatenated  = monday.concat(tuesday),
    fees = [],
    foramted_sum,
    hourly_rate = 25,
    total_fee = 0;

concatenated.forEach(function (task) {
    let duration = task.duration / 60;

    if (duration >= 2) {
        fees.push(duration * hourly_rate);
    }
});

fees.forEach(function (fee) {
    total_fee += fee;
});

formatted_sum = '$' + total_fee.toFixed(2);

console.log(formatted_sum);




