var myHouse = {
    color: 'blue'
};
var color = myHouse.color;
color = 'red';


var myHouse1 = {
    color: 'blue'
};
var myHouse2 = myHouse1;
myHouse2.color = 'red';


var myHouse3 = {
    color: 'blue'
};
var myHouse4 = {
    color: 'blue'
};
myHouse4.color = 'red';


function runWithDebugger(ourFunction) {
    debugger;
    ourFunction();
}

function logTenNumbers() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

runWithDebugger(logTenNumbers);


setTimeout(function () {
    console.log('Wake up Andriy!');
}, 5000);

var students = ['andriy', 'anastasia', 'alexandra'];

function logName(name) {
    console.log(name);
}

for (let i = 0; i < students.length; i++) {
    logName(students[i]);
}

students.forEach(logName);

students.forEach(function (name) {
    console.log(name);
});


function forEach(myArray, myFunction) {
    for (var i = 0; i < myArray.length; i++) {
        myFunction(myArray[i]);
    }
}

forEach(students, function (student) {
    console.log(student);
});

forEach(students, logName);


var tutorialsElement = $0; // Inspected element in Browser

tutorialsElement.addEventListener('click', function (event) {
    console.log(event);
    console.log("You clicked the tutorial");
});

function multiplyTwoNumbers(a, b) {
    var result = a * b;
    return result;
}
var theProductOf2Adn10 = multiplyTwoNumbers(2, 10);


function logThis() {
    console.log(this);
}

logThis(); // window

myObject = {
    myMethod: function () {
        console.log(this);
    }
};
myObject.myMethod(); // myObject


function Person(name) {
    this.name = name;
}

var andriy = new Person('andriy');
console.log(andriy); // Person {name: "andriy"}

function logThis() {
    console.log(this);
}

var explilcitlySetLogThis = logThis.bind({
    name: 'Andriy'
});

var boundOnce = logThis.bind({
    name: 'first time is forever'
})();

boundOnce.bind({
    name: 'Why even try?'
});
boundOnce.apply({
    name: 'Why even try?'
});
boundOnce.call({
    name: 'Why even try?'
});