// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


 // --------------------------------------------------------------
 // Solution 1 - Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(n) 
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let maxLength = 0;
    const charSet = new Set();

    while (right < s.length) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }
    }

    return maxLength;
}

// --------------------------------------------------------------

var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let l = 0, longest = 0;

  for (let r = 0; r < s.length; r++) {
      while (set.has(s[r])) {
          set.delete(s[l]);
          l++;
      }

      longest = Math.max(longest, r - l + 1);
      set.add(s[r]);
  }

  return longest;
};

// --------------------------------------------------------------
// Solution 2 - brute force
// Time Complexity: O(n^3)
// Space Complexity: O(n)
var lengthOfLongestSubstring = function(s) {

  let longest = 0;
  let n = s.length;
  for (let i = 0; i < n; ++i) {
      for (let substr_len = 1; i + substr_len <= n; ++substr_len) {
          var seen = new Set();
          for (let j = i; j < i + substr_len; ++j) {
              seen.add(s[j]);
          }
          if (seen.size == substr_len) {
              longest = Math.max(longest, substr_len);
          }
      }
  }

  return longest;
};




