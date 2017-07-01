// Title Case a Sentence

/*
=================================
        Testing!
=================================
*/

function titleCase(str) {

    var result = [];
    var strSplit = str.split(' ');
    for (var i = 0; i < strSplit.length; i++) {
        var a = strSplit[i].replace(strSplit[i][0], strSplit[i][0].toUpperCase());
        result.push(a);

    }
    str = result.join(' ');
    return str;
}

titleCase("I'm a little tea pot");


// Test conditions: 

str = "I'm a little tea pot";
var strSplit = str.split(' ');
console.log(strSplit);
strSplit = ["I'm", "a", "little", "tea", "pot"];

str = "I'm a little tea pot";
var strSplit = str.split(' ');
console.log(strSplit);

for (var i = 0; i < strSplit.length; i++) {
    console.log(strSplit[i][0].toUpperCase());
}


// Version 1.0.2
str = "I'm a little tea pot";
var strSplit = str.split(' ');
console.log(strSplit);
var result = [];
for (var i = 0; i < strSplit.length; i++) {
    var a = strSplit[i].replace(strSplit[i][0], strSplit[i][0].toUpperCase());
    result.push(a);
    console.log(a);

}
return result.join(' ');
