
function sumFibs(num) {
    var num1 = 1;
    var num2 = 1;
    var sumLesson = 2;
    for (var j = 3; j <= num; j++) {
        var sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        if (sum % 2 === 1) {
            sumLesson += sum;
        }
        if (sumLesson >= num) {
            break;
        }
    }
    console.log(sumLesson);
}

sumFibs(75024);
