// Truncate a string
/*
=================================
        My Answer
=================================
*/


function truncateString(str, num) {
    // Clear out that junk in your trunk

    var end = '...';

    if (str.length < 3) {
        return str.slice(0, num).concat(end);
    } else if (num === 2) {
        return str.slice(0, num).concat(end);
    } else if (num > 1 && num < 3) {
        return str.slice(0, num - 3).concat(end);
    } else if (num >= str.length) {
        return str.slice(0, num);
    } else {
        return str.slice(0, num - 3).concat(end);
    }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);


/*
=================================
        testing!
=================================
*/


var str = "A-tisket a-tasket A green and yellow basket",
    num = 11,
    end = '...';

answer = "A-tisket..."


truncateString("A-tisket a-tasket A green and yellow basket", 11);


// Solution 1
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    if (num <= 2) {
        return str.substring(0, num) + "...";
    }
    return str.substring(0, num - 3) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
