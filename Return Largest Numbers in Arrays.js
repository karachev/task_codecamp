
function largestOfFour(arr) {
    var newArr;
    for (var i = 0; i < arr.length/4; i++) {
        for (var j = 0; j < arr.length/4; j++) {
            newArr[i] = arr[j];
        }
    }
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
