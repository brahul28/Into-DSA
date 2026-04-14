//Search a number in an array and return the index value
// if the number is not present in an array return -1

let arr = [4, 5, 1, 3, 9];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let result = linearSearch(arr, 5);
console.log("Element found at index", result);
