/*

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

*/


// Need to know:
// short expression of longestWord
// usage of result.join 


// Solution 1 - naive Solution
// Time Complexity: O(n)
// Space Complexity: O(n)
var mergeAlternately = function(word1, word2) {
  const minL = Math.min(word1.length, word2.length);
  const maxL = Math.max(word1.length, word2.length);
  const longestWord = word1.length > word2.length ? word1 : word2;
  const result = [];

  for (let i = 0; i < minL; i++) {
    result.push(word1[i], word2[i]);
  }
  
  for (let i = minL; i < maxL; i++) {
    result.push(longestWord[i]);
  }

  return result.join('');
};


// S1 - but cleaner
var mergeAlternately = function(word1, word2) {
  let result = '';
   for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
     if (i < word1.length) result += word1[i];
     if (i < word2.length) result += word2[i];
   }
   return result;
 };

 // S1 - slightly different expression
 var mergeAlternately = function(word1, word2) {
  let res = "";
  let i = 0;
  while (i < word1.length || i < word2.length) {
      if (i < word1.length) res += word1[i];
      if (i < word2.length) res += word2[i];
      i++;
  }
  return res;
};

// Solution 2 - using recursion
// Time Complexity: O(n)
// Space Complexity: O(n)
var mergeAlternately = function(word1, word2) {
  if (word1.length === 0) return word2;
  if (word2.length === 0) return word1;

  return word1[0] + word2[0] + mergeAlternately(word1.slice(1), word2.slice(1));
};

// Solution 3 - using recursion with memoization
// Time Complexity: O(n)
// Space Complexity: O(n)
var mergeAlternately = function(word1, word2) {
  const memo = {};
  
  function helper(i, j) {
    if (i >= word1.length && j >= word2.length) return '';
    if (memo[`${i}-${j}`]) return memo[`${i}-${j}`];

    let result = '';
    if (i < word1.length) result += word1[i];
    if (j < word2.length) result += word2[j];

    result += helper(i + 1, j + 1);
    memo[`${i}-${j}`] = result;
    return result;
  }

  return helper(0, 0);
};

// Solution 4 - using a while loop
// Time Complexity: O(n)
// Space Complexity: O(n)
var mergeAlternately = function(word1, word2) {
  let result = '';
  let i = 0, j = 0;

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) result += word1[i++];
    if (j < word2.length) result += word2[j++];
  }

  return result;
};

