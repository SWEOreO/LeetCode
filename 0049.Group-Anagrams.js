// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]


// My Solution - split, sort, join
// Time Complexity: O(NKlogK) where N is the length of strs and K is the maximum length of a string in strs.
// Space Complexity: O(NK) where N is the length of strs and K is the maximum length of a string in strs.
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key,[]);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
};



// Solution 2
var groupAnagrams = function(strs) {
  const anagramsMap = new Map();
  
  strs.forEach(s => {
      const count = new Array(26).fill(0);
      for (let c of s) {
          count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }
      const key = count.join(',');
      if (!anagramsMap.has(key)) {
          anagramsMap.set(key, []);
      }
      anagramsMap.get(key).push(s);
  });
  
  return Array.from(anagramsMap.values());
};