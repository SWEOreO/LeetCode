// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// Solution 1:
var isIsomorphic = function(s, t) {
    // Base case: for different length of two strings...
    if(s.length != t.length)
        return false;
    // Create two maps for s & t strings...
    const map1 = [256];
    const map2 = [256];
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        // Compare the maps, if not equal, return false...
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        // Insert each character if string s and t into seperate map...
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }
    return true;    // Otherwise return true...
};

// Solution 2:
var isIsomorphic = function(s, t) {

    for (let i=0; i<s.length; i++) {

        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
            
            return false;
        }
    }
    return true;
};

// Solution 3:
var isIsomorphic = function(s, t) {
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (!mapS.has(charS)) {
            mapS.set(charS, charT);
        } else if (mapS.get(charS) !== charT) {
            return false;
        }

        if (!mapT.has(charT)) {
            mapT.set(charT, charS);
        } else if (mapT.get(charT) !== charS) {
            return false;
        }
    }
    return true;
};

// Solution 4:
var isIsomorphic = function(s, t) {
    if (s.length != t.length)
        return false
    let m = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!m.has(s[i]))
            m.set(s[i], t[i])
        else {
            
            if (m.get(s[i]) != t[i]) {
                
                return false
            }
        }
    }
    return new Set([...m.values()]).size == m.size
    
};