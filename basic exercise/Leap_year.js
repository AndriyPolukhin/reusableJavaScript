function leap_year_range(st_year, end_year) {
    // set the main functino parameters.
    var year_range = []; // set the range_variable
    for (var i = st_year; i <= end_year; i++) {
        // use a for loop to loop throught the  year range
        year_range.push(i);
    }
    var new_array = []; // set a returning array.

    // inject the testing function
    year_range.forEach(
        function (year) {
            if (test_LeapYear(year)) /// indicate the testing fun
                new_array.push(year);
        });

    retrun new_array; // return a new array when complete the test
}

function test_LeapYear(year) {
    // set the function to check each year
    if ((year % 4 === 0 && year % 100 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}

// Call the function
console.log(leap_year_range(2000, 2012));
