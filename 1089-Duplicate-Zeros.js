// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9

// Solution
var duplicateZeros = function(arr) {
    
  for (var i=0; i<arr.length; i++) {
      if (arr[i] === 0) {
          arr.splice(i, 0, 0);
          arr.pop();
          i+=1
      }
  }
  
};


// Solution 2
var duplicateZeros = function (arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    arr[i] === 0 && newArr.push(0);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[i];
  }
};


// Solution 3 - two pass
var duplicateZeros = function (arr) {
  if (arr == null || arr.length == 0) throw new Error("illegal input");
  //move in place, so no extra space
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {
          //that means must remove last one in arr
          for (let j = arr.length - 1; j > i; j--) {
              arr[j] = arr[j - 1];
          }
          i++;
      }
      else {
          continue;
      }
  }
};

// Solution 4 - one pass
const duplicateZeros = function(arr) {
  let n = arr.length;
  let zeros = 0;

  // First pass: count the number of zeros that would be duplicated
  for (let i = 0; i < n; i++) {
      if (arr[i] === 0) zeros++;
  }

  let i = n - 1;
  let j = n + zeros - 1;

  // Second pass: go backwards and copy elements, duplicating zeros
  while (i < j) {
      if (j < n) arr[j] = arr[i];

      if (arr[i] === 0) {
          j--;
          if (j < n) arr[j] = 0;
      }

      i--;
      j--;
  }
};

//Solution 5 - two indexes pointer
const duplicateZeros = function(arr) {
  const n = arr.length;
  const original = arr.slice(); // Make a copy to read from

  let i = 0; // pointer for original array
  let j = 0; // pointer for target position in arr

  while (i < original.length && j < n) {
      if (original[i] === 0) {
          if (j < n) arr[j++] = 0;
          if (j < n) arr[j++] = 0;
      } else {
          arr[j++] = original[i];
      }
      i++;
  }
};
