// Collatz Tag System # 317 on reddit.

function tagSystem(tape) {
    const steps = [];
    const rules = {
        'a': 'bc',
        'b': 'a',
        'c': 'aaa'
    }

    while (tape.length >= 2) {
        steps.push(tape);
        tape = tape.substring(2) +
            rules[tape[0]];

    }
    steps.push(tape);

    return steps;
}

console.log(
    JSON.stringify(
        tagSystem('aaa'),
        null,
        2,
    ));
