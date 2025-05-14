// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9
 

// Constraints:

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105


// Solution 1 - two pointers
var trap = function(height) {
  const n = height.length;
  const maxLeft = Array(n).fill(0);
  const maxRight = Array(n).fill(0);
  
  let lWall = 0, rWall = 0;
  
  for (let i = 0; i < n; i++) {
      const j = n - i - 1;
      maxLeft[i] = lWall;
      maxRight[j] = rWall;
      lWall = Math.max(lWall, height[i]);
      rWall = Math.max(rWall, height[j]);
  }
  
  let sum = 0;
  for (let i = 0; i < n; i++) {
      const pot = Math.min(maxLeft[i], maxRight[i]);
      sum += Math.max(0, pot - height[i]);
  }
  
  return sum;
};


// Solution 2 - two pointers
const trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}


// Another Expression of the same solution
const trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (leftMax < rightMax) {
      waterTrapped += leftMax - height[left];
      left++;
    } else {
      waterTrapped += rightMax - height[right];
      right--;
    }
  }

  return waterTrapped;
};


// Solution 3 - stack 
const trap = function(height) {
  const stack = [];
  let waterTrapped = 0;

  for (let i = 0; i < height.length; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) break;
      const distance = i - stack[stack.length - 1] - 1;
      const boundedHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      waterTrapped += distance * boundedHeight;
    }
    stack.push(i);
  }

  return waterTrapped;
};