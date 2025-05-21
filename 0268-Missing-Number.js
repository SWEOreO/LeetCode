// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// Example 2:

// Input: nums = [0,1]

// Output: 2

// Explanation:

// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]

// Output: 8

// Explanation:

// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

 
 

 

 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?


// My Solution
var missingNumber = function(nums) {
    let n = nums.length;
    let set = new Set(nums);

    for (let i = 0; i <= n; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};


// Solution 2 - using XOR
var missingNumber = function(nums) {
    let n = nums.length;
    let xor = 0;

    for (let i = 0; i < n; i++) {
        xor ^= nums[i];
    }

    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }

    return xor;
};

// Solution 3 - using Gauss' formula
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((acc, num) => acc + num, 0);

    return sum - actualSum;
};

// Solution 4 - using binary search
var missingNumber = function(nums) {
    let n = nums.length;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

// Solution 5 - using sorting
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return n;
};

// Solution 6 
var missingNumber = function(nums) {
    // construct array of size n+1, to leave a spot for the missing element.
	// Assign each val to -1 so we can see which position was not filled
    // O(n)
    const res = new Array(nums.length+1).fill(-1);
	
	// "sort" the elements by assigning to the array based on val
    // O(n)
    for(const num of nums) {
        res[num] = num;
    }
    
	// the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
};