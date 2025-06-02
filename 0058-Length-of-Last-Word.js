// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// Solution:
var lengthOfLastWord = function(s) {
    // Trim any trailing spaces
    s = s.trim();
    // Find the last space index
    var lastSpaceIndex = s.lastIndexOf(' ');
    // Return the length of the last word
    return s.length - lastSpaceIndex - 1;
};

// Solution2:
var lengthOfLastWord = function(s) {
    s = s.trim();
    
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        }
        else if (length > 0) {
            break;
        }
    }
    
    return length;
};

// Solution3:
var lengthOfLastWord = function(s) {
        let trimmed = s.trim();                      
        let words = trimmed.split(/\s+/);           
        let lastWord = words[words.length - 1];     
        let count = lastWord.length;             
        return count
};

// Solution4:
var lengthOfLastWord = function(s) {
    let count = 0;
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count the length of the last word
    while (i >= 0 && s[i] !== ' ') {
        count++;
        i--;
    }

    return count;
};

// Solution5:
var lengthOfLastWord = function(s) {
    let end = s.length - 1;

    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }

    return end - start;    
};
