// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.



// My solution:
// Time complexity: O(nlog(n))
// Space complexity: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length <= 1) return nums;

    let pivot = nums[0];
    let left = [];
    let right = [];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    return [...sortArray(left), pivot, ...sortArray(right)];

};


// Solution 2
var sortArray = function(nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
};

function mergeSort(array, low, high) {
  if (low >= high) return;
  
  const mid = Math.floor((low + high) / 2);
  mergeSort(array, low, mid);
  mergeSort(array, mid + 1, high);
  merge(array, low, mid, high);
}

function merge(array, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;
  const leftPart = array.slice(low, mid + 1);
  const rightPart = array.slice(mid + 1, high + 1);
  
  let p1 = 0, p2 = 0, writeInd = low;
  
  while (p1 < n1 && p2 < n2) {
      if (leftPart[p1] <= rightPart[p2]) {
          array[writeInd++] = leftPart[p1++];
      } else {
          array[writeInd++] = rightPart[p2++];
      }
  }
  
  while (p1 < n1) {
      array[writeInd++] = leftPart[p1++];
  }
  
  while (p2 < n2) {
      array[writeInd++] = rightPart[p2++];
  }
}