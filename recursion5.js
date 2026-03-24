

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true

// Example 2:

// Input: n = 16
// Output: true

// Example 3:

// Input: n = 3
// Output: false



var powerOfTwo = function (n) {
    

    if (n == 1) return true;
    else if (n < 1 || n % 2) return false;

    return powerOfTwo(n / 2);
    
}

console.log(powerOfTwo(7));