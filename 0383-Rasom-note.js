// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

// Solution 1 - using a map to count letters
var canConstruct = function(ransomNote, magazine) {
    const letterCount = new Map();

    // Count letters in magazine
    for (const letter of magazine) {
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
    }

    // Check if ransomNote can be constructed
    for (const letter of ransomNote) {
        if (!letterCount.has(letter) || letterCount.get(letter) <= 0) {
            return false; // Letter not available or used up
        }
        letterCount.set(letter, letterCount.get(letter) - 1); // Use the letter
    }

    return true; // All letters in ransomNote can be constructed
};