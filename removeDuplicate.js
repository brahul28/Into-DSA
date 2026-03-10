//Given an integer array nums sorted in non-decreasing order, remove the duplicates 
// in-place such that each unique element appears only once. The relative order of 
// the elements should be kept the same. then return the number of unique element 
// in nums. Consider the number of unique elements of nums to be k. 
// Change the array nums such that the first k elements of nums contain the unique 
// elements in the order they were present in nums initially. the remaining elements 
// nums are not importatnt, as well as the size of nums.

function removeDuplicates(nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let result = removeDuplicates(nums);
console.log(result);