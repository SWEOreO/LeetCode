// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

// Each letter in pattern maps to exactly one unique word in s.
// Each unique word in s maps to exactly one letter in pattern.
// No two letters map to the same word, and no two words map to the same letter.
 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

 

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lowercase English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.


// Solution 1 - hashmap - 1 map
var wordPattern = function(pattern, str) {
  const words = str.split(/\s+/);
  const map = new Map();
  
  if(words.length !== pattern.length) return false;
  if(new Set(words).size !== new Set(pattern).size) return false;
  
  for(let i = 0; i < pattern.length; i++) {
      if(map.has(pattern[i]) && 
         map.get(pattern[i]) !== words[i]) return false;
      map.set(pattern[i], words[i]);
  }
  return true;
};

// Solution 2 - hashmap - 2 maps
var wordPattern = function(pattern, s) {
  let splitArrS = s.split(' ');

  if (pattern.length !== splitArrS.length) return false;

  let letterToWord = new Map();
  let wordToLetter = new Map();

  for ( let i = 0; i < pattern.length; i++) {
 
      let letter = pattern[i];
      let word = splitArrS[i];

      if (letterToWord.has(letter) && letterToWord.get(letter) !== word) return false;
      if (wordToLetter.has(word) && wordToLetter.get(word) !== letter) return false;

      letterToWord.set(letter, word);
      wordToLetter.set(word, letter);
  }
  return true;
};

// Solution 3 - no map
function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (words.length !== pattern.length) return false;

  const charToWord = {};
  const wordToChar = {};

  for (let i = 0; i < pattern.length; i++) {
      const c = pattern[i];
      const w = words[i];

      if (charToWord[c]) {
          if (charToWord[c] !== w) return false;
      } else {
          charToWord[c] = w;
      }

      if (wordToChar[w]) {
          if (wordToChar[w] !== c) return false;
      } else {
          wordToChar[w] = c;
      }
  }

  return true;
}