// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104


// Solution 
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b); // Correct sorting

    let closest = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let lo = i + 1;
        let hi = nums.length - 1;

        while (lo < hi) {
            let sum = nums[i] + nums[lo] + nums[hi];

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum < target) {
                lo++;
            } else if (sum > target) {
                hi--;
            } else {
                return target; // Exact match
            }
        }
    }

    return closest;
};
