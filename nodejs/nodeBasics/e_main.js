// Import events module
const events = require('events');

// Create an eventEmitter object
const eventEmitter = new events.EventEmitter();

const connectHandler = function connect() {
    console.log('connection succesful.');
    // Fire the data_recieved event
    eventEmitter.emit('data_recieved');

}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended");