function findLongestWord(str) {
    var maxWord = 0;
    var buff = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            buff++;
        } else {
            if (buff > maxWord) {
                maxWord = buff;
            }
            buff = 0;
        }
        if (str.length == i + 1) {
            if (buff > maxWord) {
                maxWord = buff;
            }
        }
    }
    return maxWord;
    // console.log(maxWord);
}

findLongestWord("otorhinolaryngology");
