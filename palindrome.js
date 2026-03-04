function palindrome(n) {
    let rev = 0;
    let copy = n;
    if (n < 0) {
        console.log(false);
    }
    while (n > 0) {
        let rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10);

    }

    if (rev === copy) {
        console.log(true)
    } else {
        console.log(false);
    }

}
let num = 1221;
palindrome(num)