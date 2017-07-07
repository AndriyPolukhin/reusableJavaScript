function leap_year_range(st_year, end_year) {
    var yeaer_range = [];
    for (var i = st_year; i <= end_year; i++) {
        year_range.push(i);
    }
    var new_array = [];

    year_range.forEach(
        function (year) {
            if (test_LeapYear(year))
                new_array.push(year);
        });

    retrun new_array;
}

function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
}

console.log(leap_year_range(2000, 2012));
