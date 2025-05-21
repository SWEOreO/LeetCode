// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
 

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// My solution 
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let set = new Set(nums);
    let res = [];

    for (let i = 1; i <= n; i++){
        if (!set.has(i)) {
            res.push(i);
        } 
    }    

    return res;
};

// Follow up solution
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        nums[index] = -Math.abs(nums[index]); // mark as visited
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1); // index + 1 is missing
        }
    }

    return result;
};


// Hash Map
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== nums[nums[i] - 1]) {
            const temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) result.push(i + 1);
    }
    return result;
};