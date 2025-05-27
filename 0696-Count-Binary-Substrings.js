// Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

 

// Example 1:

// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of times they occur.
// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
// Example 2:

// Input: s = "10101"
// Output: 4
// Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.


/**
 * @param {string} s
 * @return {number}
 */

// Solutions with more detailed explanations
const countBinarySubstrings = (s) => {
  let prev = 0, curr = 1, result = 0;
  
  for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i - 1]) {
          curr++;  // Count consecutive 0's or 1's
      } else {
          prev = curr; // Shift counts
          curr = 1;  // Reset counter for new group
      }
      if (prev >= curr) {
          result++; // Count valid substrings
      }
  }
  return result;
};