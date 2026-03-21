//Sum of all odd numbers in an Array




let arr = [5, 3, 2, 0, 1];


var sum = function (n) {
    let isOdd = arr[n] % 2;

    if (n == 0) {
        // if (isOdd) return arr[0];
        // else return 0;

        return isOdd ? arr[n] : 0;
    }

    // if (isOdd) return arr[n] + sum(n - 1);
    // else return 0 + sum(n - 1);
    return (isOdd ? arr[n] : 0) + sum(n - 1);

}
console.log(sum(arr.length - 1));