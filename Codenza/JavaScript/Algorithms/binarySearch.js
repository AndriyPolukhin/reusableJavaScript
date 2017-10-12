(function (exports) {
    'use strict';

    function id(val) {
        return val;
    }

    function get(key) {
        return function (val) {
            return val[key];
        };
    }

    function binarySearch(array, value, key) {
        key = !key ? id : typeof key === 'string' ? get(key) : key;
        value = key(value);
        var middle = Math.floor(array.length / 2);
        var left = 0;
        var right = array.length;
        while (right >= left) {
            var middleValue = key(array[middle]);
            if (middleValue === value) {
                return middle;
            } else if (middleValue > value) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
            middle = Math.floor((left + right) / 2);
        }
        return -1;
    }
    exports.binarySearch = binarySearch;

})(typeof window === 'undefined' ? module.exports : window);
