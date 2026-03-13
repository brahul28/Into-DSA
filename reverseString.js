//rite a function that reverses a string. The input string is given as an array of 
// characters s.// You must do this by modifying the input array in-place with O(1) extra memory.
//Example 1:
//Input: s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]

var reverseString = function (str) {
    let len = str.length;
    let n = Math.floor(len/2);

    for (let i = 0; i < n; i++){

        let temp = str[i];
        str[i] = str[len - i - 1];
        str[len - i - 1] = temp;
    }
    return str;

}
    let s = ["h", "e", "l", "l", "o"];

let result = reverseString(s);
console.log(result);