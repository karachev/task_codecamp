function repeatStringNumTimes(str, num) {
    // repeat after me
    var newStr = '';
    for (var i = 0; i < num; i++) {
        newStr += str;
    }
    // return str;
    console.log(newStr);
}

repeatStringNumTimes("abc", 3);
