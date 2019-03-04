const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

emitter.on('event', function(x,y) {
  console.log(x, y, this);
});

emitter.emit('event', 'En', 'ki');