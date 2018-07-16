const stats = {
max: 56.78,
standard_deviation: 4.34,
median: 34.54,
mode: 23.07,
min: -0.75,
average: 35.85
};
const half = (function() {
"use strict";
return function half({min,max}) {
  return (max + min)/2.0;
  };
})();
console.log(stats);
console.log(half(stats))
