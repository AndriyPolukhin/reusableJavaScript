function repeatStringNumTimes(str, num) {

   let newstr = "";

    if (num < 0) {
        return "";


    }


    for (let i = 0; i < num; i++) {
        newstr = newstr + str;
    }

    console.log(newstr);

    return newstr;

}

repeatStringNumTimes("abc", 3);
