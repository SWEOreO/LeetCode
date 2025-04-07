// You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:

// Replace each even number with 0.
// Replace each odd numbers with 1.
// Sort the modified array in non-decreasing order.
// Return the resulting array after performing these operations.

 

// Example 1:

// Input: nums = [4,3,2,1]

// Output: [0,0,1,1]

// Explanation:

// Replace the even numbers (4 and 2) with 0 and the odd numbers (3 and 1) with 1. Now, nums = [0, 1, 0, 1].
// After sorting nums in non-descending order, nums = [0, 0, 1, 1].
// Example 2:

// Input: nums = [1,5,1,4,2]

// Output: [0,0,1,1,1]

// Explanation:

// Replace the even numbers (4 and 2) with 0 and the odd numbers (1, 5 and 1) with 1. Now, nums = [1, 1, 1, 0, 0].
// After sorting nums in non-descending order, nums = [0, 0, 1, 1, 1].


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
  for (let i in nums) {
      if (nums[i] % 2 === 0){
          nums[i] = 0;
      } else {
          nums[i] = 1;
      }
  nums.sort((a,b) => a - b);
  }
  return nums;    
};


// Solution 2
var transformArray = function(nums) {
   
  const result = nums.map(item => {
    return item % 2 === 0 ? 0 : 1;
  });
  
     return result.sort((a,b)=>a-b)
  };
    


// Solution 3 - non sort solution
var transformArray = function (nums) {
  // Solution: Count number of even numbers
  // Time: O(N)
  // Space: O(1)

  let even = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      even++;
    }
  }

  for (let i = 0; i < even; i++) {
    nums[i] = 0;
  }

  for (let i = even; i < nums.length; i++) {
    nums[i] = 1;
  }

  return nums;
};