//Sum of all numbers in an Array

var sum = function(n){
    if (n == 0) return arr[n];

    return arr[n] + sum(n - 1);
    
}
console.log(sum(arr.length - 1));