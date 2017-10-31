
function sumAll(arr) {
    debugger;
    var minVal = arr[0];
    var maxVal = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (minVal > arr[i]) {
            minVal = arr[i];
        }
        if (maxVal < arr[i]) {
            maxVal = arr[i];
        }
    }
    var sum = 0;
    for (var j = minVal; j <= maxVal; j++) {
        sum += j;
    }
    // console.log(sum);
    return sum;
}

sumAll([5, 10]);
