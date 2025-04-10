// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Solution 1 - Merge and Find Median - sort first
const findMedianSortedArrays = function(nums1, nums2) { 
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = merged.length;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}


// Solution 2 - two pointers
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function(nums1, nums2) {
  let merged = [];
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
          merged.push(nums1[i++]);
      } else {
          merged.push(nums2[j++]);
      }
  }

  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  let mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
      return (merged[mid-1] + merged[mid]) / 2;
  } else {
      return merged[mid];
  }
};

// Solution 3 - Binary Search
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays3 = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
  }
  
  const x = nums1.length;
  const y = nums2.length;
  let low = 0;
  let high = x;

  while (low <= high) {
      const partitionX = Math.floor((low + high) / 2);
      const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

      const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
      const minX = partitionX === x ? Infinity : nums1[partitionX];

      const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
      const minY = partitionY === y ? Infinity : nums2[partitionY];

      if (maxX <= minY && maxY <= minX) {
          if ((x + y) % 2 === 0) {
              return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
          } else {
              return Math.max(maxX, maxY);
          }
      } else if (maxX > minY) {
          high = partitionX - 1;
      } else {
          low = partitionX + 1;
      }
  }

  throw new Error("Input arrays are not sorted");
}