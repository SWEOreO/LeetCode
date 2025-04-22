// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105


// Solution - hash map
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - myMap.get(nums[i]) <= k) {
      return true;
    }

    myMap.set(nums[i], i);
  }

  return false;
};


// different expression 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map();
  let difference = 0;

  for (let i = 0; i < nums.length; i++) {
    let number = nums[i];

    if (map.has(number)) {
      difference = Math.abs(i - map.get(number));
      if (difference <= k) return true;
    }
    
    map.set(number, i);
  }

  return false;
};