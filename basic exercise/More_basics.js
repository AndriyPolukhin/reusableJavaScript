// Finding an area of a triangle

var side1 = 5;
var side2 = 6;
var side3 = 7;
var perimeter = (side1 + side2 + side3) / 2;
var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
console.log(area);
