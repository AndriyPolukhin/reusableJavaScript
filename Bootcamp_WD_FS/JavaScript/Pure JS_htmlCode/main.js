function inArray(arrayToCheck, value) {
    for (i = 0; i < arrayToCheck.length; i++) {
        if (arrayToCheck[i] === value) {
            return true;
        }
    }

    return false;
}

var randArray = [1, 2, 3, 4];

document.write("In Array : ", inArray(randArray, 4) + "<br>");
