function palindrome(str) {
    str = str.toLowerCase();
    str = str.replace(/\W\d|\_/gi, ' ');
    var re = /[\w+]/gi;
    var strUpdated = str.match(re);
    var strUpJoin = strUpdated.join('');
    var strUpReverse = strUpdated.reverse().join('');
    return strUpJoin === strUpReverse ? true : false;
}


palindrome("eye");
