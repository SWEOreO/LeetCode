// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums1. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].


// Solution - filter() and set() method - good one
const findDifference = function(nums1, nums2) {
  // distinct integers in nums1, nums2 
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const diff1 = [...set1].filter(num => !set2.has(num)); // return new array
    const diff2 = [...set2].filter(num => !set1.has(num));
    
    return [diff1, diff2];
}

// Solution 2 - similar to above but using for loop
var findDifference2 = function(nums1, nums2) {
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);
  let ans = [[], []];

  for (let i of s1) {
      if (!s2.has(i)) {
          ans[0].push(i);
      }
  }

  for (let i of s2) {
      if (!s1.has(i)) {
          ans[1].push(i);
      }
  }

  return ans;
};


// Solution 3 - similar but using delete method
var findDifference3 = function(nums1, nums2) {
  // Convert arrays to sets
  const h1 = new Set(nums1);
  const h2 = new Set(nums2);

  // Remove common elements
  for (let num of nums2) {
      if (h1.has(num)) {
          h1.delete(num);
          h2.delete(num);
      }
  }

  // Convert sets to arrays and return
  return [Array.from(h1), Array.from(h2)];
};