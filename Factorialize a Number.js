
function factorialize(num) {
    var count = 1;
    for (var i = 1; i <= num; i++) {
        count = count * i;
    }
    // return count;
    console.log(count);
}

factorialize(10);

