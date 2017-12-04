// Init a Function of events
function getChar(event) {
    // for IE this is the code goes here.
    if (event.which === null) {
        // if not null then return String
        return String.fromCharCode(event.keyCode);

        // for all other browsers.
    } else if (event.which != 0 && event.charCode != 0) {
        return String.fromCharCode(event.which);
    } else {
        return null;
    }
}


// now I call for the characters
document.getElementById("charInput").onkeypress = function (event) {

    // init a var and add some safeguards for older browser
    var char = getChar(event || window.event);

    // check if the valid char pressed
    if (!char) {
        return false;
    }

    // return the data into the field
    document.getElementById("keyData").innerHTML = char + " was clicked";
    return true;
}


document.getElementById("charInput").onfocus = function (event) {
    document.getElementById("keyData").innerHTML = "Input Gainded Focus";
}

document.getElementById("charInput").onselect = function (event) {
    document.getElementById("keyData").innerHTML = "Text selected";
}

document.getElementById("logoButton").onclick = function (event) {
    document.getElementById("logo").className = "show";
}

document.getElementById("logo").onmouseover = function (event) {
    document.getElementById("logo").className = "scaleX";
    document.getElementById("mouseInput").value = "Mouse Over Image";
}

document.getElementById("logo").onmouseout = function (event) {
    document.getElementById("logo").classList.remove = "scaleX";
    document.getElementById("mouseInput").value = " ";
}

document.body.onmousemove = function (e) {

    e = e || window.event;

    var pageX = e.pageX;
    var pageY = e.pageY;

    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    document.getElementById("mouseX").value = pageX;
    document.getElementById("mouseY").value = pageY;
};

document.getElementById("clearInputs").onclick = function (event) {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].type == "text") {
            inputElements[i].value = "";
        }
    }
}
