// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// My Solution - Brute-force Approach - WRONG!!! - only work for arrays without 0
// similar to the creative method
var productExceptSelf = function(nums) {
    let product = 1;
    let res = 0;
    let output = [];

    for (let num of nums) {
        product *= num;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            res = product/nums[i];
            output.push(res);
        } else {
            res = 0;
            output.push(res);
        }
    }

    return output;
};



// Creative methods
var productExceptSelf = function(nums) {
  const n = nums.length;
  const ans = new Array(n).fill(0); // initialize the result array with 0 with length n
  let product = 1;
  let zeros = 0;

  for (const num of nums) {
      if (num === 0) {
          zeros++;
          continue; //skip the zero and continue to the next iteration
      }
      product *= num;
  }

  if (zeros === 1) {
      for (let i = 0; i < n; i++) {
          ans[i] = nums[i] === 0 ? product : 0;
      }
  } else if (zeros === 0) {
      for (let i = 0; i < n; i++) {
          ans[i] = Math.floor(product / nums[i]);
      }
  }

  return ans;
};


// regular method - Brute-force Approach
var productExceptSelf = function(nums) {
  let n = nums.length;
  let ans = new Array(n).fill(1);
  
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          if (i !== j) {
              ans[i] *= nums[j];
          }
      }
  }
  return ans;
};


// Solution - Optimized Approach using Prefix and Suffix Arrays
var productExceptSelf = function(nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  let ans = new Array(n).fill(1);

  // Fill prefix array
  for (let i = 1; i < n; i++) {
      prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  // Fill suffix array
  for (let i = n - 2; i >= 0; i--) {
      suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  // Calculate the result
  for (let i = 0; i < n; i++) {
      ans[i] = prefix[i] * suffix[i];
  }

  return ans;
};



// Solution - Optimal Approach with Constant Space
var productExceptSelf = function(nums) {
  let n = nums.length;
  let ans = new Array(n).fill(1);

  // Calculate prefix products
  for (let i = 1; i < n; i++) {
      ans[i] = ans[i - 1] * nums[i - 1];
  }

  let prevSuffix = 1;
  // Calculate suffix products and update ans array
  for (let i = n - 2; i >= 0; i--) {
      prevSuffix *= nums[i + 1];
      ans[i] *= prevSuffix;
  }

  return ans;
};


// Solution - Left and Right Product Arrays
var productExceptSelf = function(nums) {
  let n = nums.length;
  let left = new Array(n).fill(1);
  let right = new Array(n).fill(1);
  let ans = new Array(n).fill(1);

  // Calculate left products
  for (let i = 1; i < n; i++) {
      left[i] = left[i - 1] * nums[i - 1];
  }

  // Calculate right products
  for (let i = n - 2; i >= 0; i--) {
      right[i] = right[i + 1] * nums[i + 1];
  }

  // Calculate the result
  for (let i = 0; i < n; i++) {
      ans[i] = left[i] * right[i];
  }

  return ans;
};


// Another expression
var productExceptSelf = function (nums) {
   const n = nums.length;
   const ans = new Array(n);
   for (let i = 0, left = 1; i < n; ++i) {
       ans[i] = left;
       left *= nums[i];
   }
   for (let i = n - 1, right = 1; i >= 0; --i) {
       ans[i] *= right;
       right *= nums[i];
   }
   return ans;
};