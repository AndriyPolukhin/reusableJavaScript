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
