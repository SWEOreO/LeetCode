// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// Need to Know:
// usage of let A = Infinity
// usage of Math.min (value1,value2)
// text.substring(startIndex, endIndex), will return to a new string

// Solution 1
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  let minLen = Infinity;

  for (let str of strs) {
    minLen = Math.min(minLen, str.length);
  }

  let i = 0;

  while (i < minLen ) {
    for(let s of strs) {    
      if (s[i] !== strs[0][i]) {
        return strs[0].substring(0,i);
      }
    }
    i++;
  }

    return strs[0].substring(0, i);
  }

  // Solutiuon 2 - use first string as a reference
  /**
   * @param {string[]} strs
   * @return {string}
   */
  var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};


// Solution 3 - use first string as a reference and trim the prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        if (!prefix) return "";
      }
  }
  return prefix;
};