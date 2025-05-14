// Given a string s, return the longest palindromic substring in s.

 // palindrome is a string that reads the same backward as forward.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.



// Solution 1 - expand around center
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
  }
  // slice from left + 1 to right because left/right now point *outside* the palindrome
  return s.slice(left + 1, right);
}

var longestPalindrome = function(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
      // Odd-length palindromes
      let odd = expandAroundCenter(s, i, i);
      // Even-length palindromes
      let even = expandAroundCenter(s, i, i + 1);

      let longer = odd.length > even.length ? odd : even;
      if (longer.length > result.length) {
          result = longer;
      }
  }

  return result;
};


// Splution 2 - dynamic programming
var longestPalindrome2 = function(s) {
  const n = s.length;
  if (n === 0) return "";
  
  let start = 0, maxLength = 1;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));
  
  for (let i = 0; i < n; i++) {
      dp[i][i] = true; // Single chars are palindromes
  }
  
  for (let length = 2; length <= n; length++) {
      for (let i = 0; i <= n - length; i++) {
          const j = i + length - 1;
          if (s[i] === s[j]) {
              if (length === 2) {
                  dp[i][j] = true;
              } else {
                  dp[i][j] = dp[i + 1][j - 1];
              }
              if (dp[i][j] && length > maxLength) {
                  start = i;
                  maxLength = length;
              }
          }
      }
  }
  
  return s.substring(start, start + maxLength);
};


// Solution 3 - recursion
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome3 = function(s) {
  function expand(i,j) {
      let left = i;
      let right = j;

      while(left >=0 && right< s.length && s[left] == s[right]) {
          left--;
          right++;
      }
      return s.slice(left + 1, right);
  }

  let ans = "";

  for(let i=0; i<s.length; i++) {
      //expand for odd palindromes
      let odd = expand(i, i);
      if(odd.length > ans.length) {
          ans = odd;
      }
      //expand for even palindromes
      let even = expand(i, i+1);
      if(even.length > ans.length) {
          ans = even;
      }

  }

  return ans;

};


