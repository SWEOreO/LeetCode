// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


// Follow up: Could you minimize the total number of operations done?

// Approach
// 1. Initialize a variable `lastNonZeroFoundAt` to 0.
// 2. Iterate through the array `nums` using a for loop.
// 3. If the current element is not zero, swap it with the element at index `lastNonZeroFoundAt`.
// 4. Increment `lastNonZeroFoundAt`.
// 5. After the loop, all non-zero elements will be at the beginning of the array, and all zero elements will be at the end.
// 6. Return the modified array.
// Time Complexity: O(n)
// Space Complexity: O(1)


// Solutions 
// // 1. Two Pointers Approach
var moveZeroes = function(nums) {
  let insertPos = 0;

  // First pass: Move non-zero elements to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Second pass: Fill the rest with 0s
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums; // Optional — the function modifies nums in-place
};


// 2. Using Array.prototype.filter
var moveZeroes = function(nums) {
  // Filter out non-zero elements and store them in a new array
  const nonZeroElements = nums.filter(num => num !== 0);

  // Calculate the number of zeros to add
  const zeroCount = nums.length - nonZeroElements.length;

  // Create a new array with non-zero elements followed by zeros
  const result = [...nonZeroElements, ...Array(zeroCount).fill(0)];

  // Copy the result back to the original array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }

  return nums; // Optional — the function modifies nums in-place
};
