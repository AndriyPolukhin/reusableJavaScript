var start = new Date();
doSomething();
var end = new Date();

var elapsed = end.getTime() - start.getTime();
console.log(elapsed);

function doSomething() {
    for (var i = 0; i < 10000000000; i++) {}
};
