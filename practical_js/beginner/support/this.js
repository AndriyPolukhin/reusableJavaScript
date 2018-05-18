function outerFunction(callback) {
    callback();
}

function logThis() {
    console.log(this);
}

outerFunction(logThis); // window

function callAsMethod(callback) {
    var weirdObject = {
        name: "Don't do this in real life"
    };

    weirdObject.callback = callback;
    weirdObject.callback();
}

callAsMethod(logThis); // weird Ojbect is loged to console


function callAsCounstructor(callback) {
    new callback();
}

callAsCounstructor(logThis);
// object by logthis is loged

function callAndBindToAndriy(callback) {
    var boundCallback = callback.bind({
        name: 'Andriy'
    });
    boundCallback();
}

callAndBindToAndriy(logThis);

var boundOnce = logThis.bind({
    nane: 'The first time is forever'
});
callAndBindToAndriy(boundOnce);