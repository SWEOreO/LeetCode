// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109


// Solution
var fourSum = function(nums, target) {
    let answer = [];
    nums.sort((a, b) => a - b);
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let lo = j + 1, hi = n - 1;
            while (lo < hi) {
                let sum = nums[i] + nums[j] + nums[lo] + nums[hi];
                if (sum === target) {
                    answer.push([nums[i], nums[j], nums[lo], nums[hi]]);
                    lo++;
                    hi--;
                    while (lo < hi && nums[lo] === nums[lo - 1]) lo++;
                    while (lo < hi && nums[hi] === nums[hi + 1]) hi--;
                } else if (sum < target) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
    }
    return answer;
};