// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


// Fast solution
var majorityElement = function(nums) {
  let candidate = nums[0];
  let count = 0;

  for (const num of nums) {
      if (count === 0) {
          candidate = num;
      }
      count += (candidate === num) ? 1 : -1;
  }

  return candidate;
};


// solution 2 - regular solution - hash map
var majorityElement = function(nums) {
  const len_n = nums.length;
  const count = {};
  for (const num of nums) {
      count[num] = (count[num] || 0) + 1;

      if (count[num] > len_n / 2) {
          return num;
      }
  }
};