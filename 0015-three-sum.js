// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// solution - sort and two pointers
// Time complexity - O(n^2)
// Space complexity - O(1)
var threeSum = function(nums) {
  let res = 0;

  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          const sum = nums[i] + nums[left] + nums[right];
          if (sum === 0) {
              res.push([nums[i], nums[left], nums[right]]);
              while (left < right && nums[left] === nums[left + 1]) left++;
              while (left < right && nums[right] === nums[right - 1]) right--;
              left++;
              right--;
          } else if (sum < 0) {
              left++;
          } else {
              right--;
          }
      }
  }
  return res;
};


// Hashmap Solution:

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const indexMap = new Map();
    const result = new Set();
    const n = nums.length;

    // Build the index map
    for (let i = 0; i < n; i++) {
        indexMap.set(nums[i], i);
    }

    // Iterate over each pair
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const desired = -nums[i] - nums[j];
            if (indexMap.has(desired) && indexMap.get(desired) !== i && indexMap.get(desired) !== j) {
                const triplet = [nums[i], nums[j], desired].sort((a, b) => a - b);
                result.add(triplet.toString());
            }
        }
    }

    return Array.from(result, str => str.split(',').map(Number));
};


// Two Pointer Solution:
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let answer = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let lo = i + 1, hi = n - 1;
        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];
            if (sum === 0) {
                answer.push([nums[i], nums[lo], nums[hi]]);
                lo++;
                hi--;
                while (lo < hi && nums[lo] === nums[lo - 1]) lo++;
                while (lo < hi && nums[hi] === nums[hi + 1]) hi--;
            } else if (sum < 0) {
                lo++;
            } else {
                hi--;
            }
        }
    }

    return answer;
};