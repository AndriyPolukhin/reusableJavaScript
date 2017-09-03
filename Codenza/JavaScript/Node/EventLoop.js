const fs = require('fs');

function someAsyncOperation(callback) {
    fs.readFile('/path/to/file', callback);
}

const timeoutSchedule = Data.now();

setTimeout(() => {
    const delay = Date.now() - timeoutSchedule;

    console.log(`${delay}ms have passed since I was scheduled`);
}, 100);


someAsyncOperation(() => {
    const startCallback = Date.now();

    while (Date.now() - startCallback < 10) {

    }
});
