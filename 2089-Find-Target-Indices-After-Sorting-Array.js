// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

// Example 1:

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Example 2:

// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.
// Example 3:

// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function binarySearch(lists, sorted, low, high, target){
  if(low > high) return;
  
  const mid = low + Math.floor((high - low) / 2);
  
  if(sorted[mid] === target){
  lists.push(mid);
  }
  
  binarySearch(lists, sorted, low, mid-1, target);
  binarySearch(lists, sorted, mid+1, high, target);
}

var targetIndices = function(nums, target) {
  let result = [];
  nums.sort((a,b)=>a-b);
  if(!nums.includes(target)) return [];

  binarySearch(result, nums, 0 , nums.length-1, target);
  return result.sort((a,b) => a-b);
}