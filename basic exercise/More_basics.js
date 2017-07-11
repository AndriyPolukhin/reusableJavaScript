// Finding an area of a triangle

var side1 = 5;
var side2 = 6;
var side3 = 7;
var perimeter = (side1 + side2 + side3) / 2;
var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
console.log(area);


// How to get a current date

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = mm + '-' + dd + '-' + yyyy;
console.log(today);
today = mm '/' + dd + '/' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);
