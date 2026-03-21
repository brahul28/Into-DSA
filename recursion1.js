//Sum of first n numbers

var nums = function(n){
    if (n == 0) return 0;

    return n + nums(n - 1);
    
}

console.log(nums(5));