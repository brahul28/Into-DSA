function countDigit(n) {

    let count = 0;
// In case number is zero
    if (n == 0) return 1
//convert number  into positive
    n = Math.abs(n);

    while (n > 0) {
//rounds down and returne the largest integer less than or equal to given number
        n = Math.floor(n / 10);

        count++;
    }
    return count;
}

let num = 259;
let result = countDigit(num);
console.log(result);