function reverseInteger(num) {
    let copyNum = num;
    num = Math.abs(num);
    let rev = 0;
    while (num > 0) {
        let last = num % 10;
        rev = (10 * rev) + last;
        num = Math.floor(num / 10);
    }

    let limit = Math.pow(2, 31); // let limit = 2**31;

    if (rev < -limit || rev > limit) return 0;

    return (copyNum < 0) ? -rev : rev;
}

let number = -1234;
let result = reverseInteger(number);
console.log(result);