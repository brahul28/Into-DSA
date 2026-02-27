function secondLargest(arr) {

    if (arr.length < 2) {
        return "The Array must have atleast 2 elements";
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    if (secondLargest === -Infinity) {
        return "No second largest number found";
    } else return secondLargest;

}

let arr = [0, 3, 5, 2, 7, 9];

let result = secondLargest(arr);
console.log(result);