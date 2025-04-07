// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// My Solution
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  let n = nums.length
  while ( k > 0) {
      nums.unshift(nums[n - 1]);
      nums.pop(nums[n - 1]); // without pop, unshifted value stays in the array
      k--;
  }
  return nums;
};


// Solution 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let n = nums.length;
  k = k % n;
  if (k === 0) return;
  
  let temp = nums.slice(-k);
  for (let i = n - k - 1; i >= 0; i--) {
      nums[i + k] = nums[i];
  }
  for (let i = 0; i < k; i++) {
      nums[i] = temp[i];
  }
};


// Solution 3
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  if (k === 0) return;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
  }
}


// another code for similar method as above
const revNums = (nums, start, end) => {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end],nums[start]];
    start++;
    end--;
  }
}

var rotate = function(nums, k) {
  k = k % nums.length;

  nums.reverse();
  revNums(nums, 0, k -1);
  revNums(nums, k, nums.length - 1);
};


