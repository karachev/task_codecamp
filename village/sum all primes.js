function sumPrimes(num) {
    let sumVal = 0;
    debugger;
    nextPrime: for (let i = 1; i <= num; i++) {
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                continue nextPrime;
            }
            else {
                sumVal += i;
            }
        }
    }
    console.log(sumVal);
}

sumPrimes(10);
// 2
// 3
// 5
// 7