function sequentialSize(val) {
    var answer = ""; // Should be returned in the End

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";

    }
    return answer;
}

dequentialSize(1);


function chainToSwitch(val) {
    var answer = "";

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Miss me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
    }
    return answer;
}
undefined
chainToSwitch(7);
