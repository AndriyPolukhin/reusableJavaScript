var h1 = document.querySelector("h1");

var tag = document.getElementById("highlight");

tag.classList.add("some-class");

var pTag = document.querySelector("p");



// WHat can be added to a classList

// ADD A CLASS TO THE SELECTED ELEMENT
pTag.classList.add("another-class");

// REMOVE A CLASS
pTag.classList.remove("another-class");

// TOGGLE A CLASS
pTag.classList.toggle("another-class");

pTag.textContent = "Hello There";

var innerHTMLtext = document.querySelector("p");

innerHTMLtext.innerHTML
