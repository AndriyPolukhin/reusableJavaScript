// SEtting and getting css styles

var line = document.getElementById('line');
var attribute = document.getElementById('attribute');

line.style.background = 'red';
attribute.style.boxShadow = "2px 2px 5px 1px blue";

line.style.cssText = "color:blue; border: 1px solid black";

attribute.setAttribute("style", "color:red; border: 1px solid blue;");
console.log(line.style);
console.log(window.getComputedStyle(line));


// SELECTING
/*
var div1 = document.getElementById('div1');
var unicycle = document.getElementsByClassName('unicycle');
var paragraphs = document.getElementsByTagName('p');
var queryUnicycle = document.querySelector('.unicycle');
var queryAll = document.querySelectorAll('.unicycle, #div2');

var text = "<h1>Hello World</h1>";

queryUnicycle.textContent = text;

for (i = 0; i < queryAll.length; ++i) {
    queryAll[i].innerHTML = text;
}
*/
