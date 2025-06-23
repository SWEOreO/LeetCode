// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3


// my solution 
var longestConsecutive = function(nums) {
  if (!nums || nums.length === 0) return 0;

  nums = nums.sort((a,b) => a -b);
  let count = 1;
  let i = 0;
  let result = count;

  while (i < nums.length - 1) {
      if (nums[i + 1] - nums[i] === 1) {
          count++;
          i++;
          result = Math.max(count, result);
      } else if (nums[i + 1] === nums[i]) {
          i++;
      } else {
          count = 1;
          i++;
      }
  }

  return result;
};



// Solution 1 - HashSet

const longestConsecutive = function(nums) {

    let set = new Set(nums);
    let res = 0;
 
     for (const num of set) {
         if (!set.has(num - 1)) {
             let next = num + 1;
             let len = 1;
             while(set.has(next)){
                 len++;
                 next++;
             }
             res = Math.max(res, len)
         }
     }
    return res;
 };