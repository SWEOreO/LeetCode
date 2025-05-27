// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * 
 * // Solution 1  copy from answers
 */
var merge = function(nums1, m, nums2, n) {
  let midx = m - 1;  // end index of num1 w/ intiger
  let nidx = n - 1;  // end index of num2
  let right = m + n - 1;  // end index of num1

  while (nidx >= 0) {
      if (midx >= 0 && nums1[midx] > nums2[nidx]) {
          nums1[right] = nums1[midx];
          midx--;
      } else {
          nums1[right] = nums2[nidx];
          nidx--;
      }
      right--;
  }
};


// ========================================================================



// Solution 2
const mergeArray = (nums1, m, nums2, n) => {
  let i = m - 1; // length minus 1 equals to MAX index for Array1 
  let j = n - 1; // Max index for Array2
  let k = i + j - 1; // final Array's MAX Index

  while(j >=0) {
    if(i>=0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};



// ========================================================================

// Solution 3 - very clear!!!

var merge = function(nums1, m, nums2, n) {
  let x = m - 1, y = n - 1;

  for (let z = m + n - 1; z >= 0; z--) {
      if (x < 0) {
          nums1[z] = nums2[y--];
      } else if (y < 0) {
          break;
      } else if (nums1[x] > nums2[y]) {
          nums1[z] = nums1[x--];
      } else {
          nums1[z] = nums2[y--];
      }
  }
};



// My code - wrong answer!!!


const finalArray = (nums1, m, nums2, n) => {
  let nums1Index = m - 1;
  let nums2Index = n - 1;

  if (nums1Index <= 0) {
    return nums1;
   } else if (nums2Index<= 0) {
    return nums2;
   } else {
    for (let x = n + m -1; x >= 0; x--) {
      if (nums1[nums1Index] < nums2[nums2Index]) {
        nums1[x] = nums1[nums1Index--];
      } else {
        nums1[z] =  nums2[nums2Index--];
      }
    }
   }
};