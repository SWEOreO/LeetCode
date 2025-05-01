// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Machine 1 (sender) has the function:

// string encode(vector<string> strs) {
//   // ... your code
//   return encoded_string;
// }
// Machine 2 (receiver) has the function:
// vector<string> decode(string s) {
//   //... your code
//   return strs;
// }
// So Machine 1 does:

// string encoded_string = encode(strs);
// and Machine 2 does:

// vector<string> strs2 = decode(encoded_string);
// strs2 in Machine 2 should be the same as strs in Machine 1.

// Implement the encode and decode methods.

// You are not allowed to solve the problem using any serialize methods (such as eval).

 

// Example 1:

// Input: dummy_input = ["Hello","World"]
// Output: ["Hello","World"]
// Explanation:
// Machine 1:
// Codec encoder = new Codec();
// String msg = encoder.encode(strs);
// Machine 1 ---msg---> Machine 2

// Machine 2:
// Codec decoder = new Codec();
// String[] strs = decoder.decode(msg);
// Example 2:

// Input: dummy_input = [""]
// Output: [""]
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] contains any possible characters out of 256 valid ASCII characters.
 

// Follow up: Could you write a generalized algorithm to work on any possible set of characters?


// Solution 1
// "appleĀbananaĀcherry" // Ā = Unicode 257
// String.fromCharCode(257) creates a special separator character — in this case, Unicode character with code 257.
var encode = function(strs) {
  return strs.join(String.fromCharCode(257));
};

var decode = function(s) {
  return s.split(String.fromCharCode(257));
};

// similar solution 
const encode = (strs) => strs.join('😝');
const decode = (s) => s.split('😝');

// Solution 2 - use JSON
var encode = function(strs) {
  return JSON.stringify(strs)
};

var decode = function(s) {
  return JSON.parse(s)
};

// Solution 3 - similar to 1, use "#" to seperate the string
// Encoder
function encode(strs) {
  return strs.map(str => `${str.length}#${str}`).join('');
}

// Decoder
function decode(s) {
  const result = [];
  let i = 0;

  while (i < s.length) {
    let j = i;

    // Find the delimiter to get the length
    while (s[j] !== '#' && j < s.length) {
      j++;
    }

    const len = parseInt(s.slice(i, j), 10); // from i to j (not including '#')
    const str = s.slice(j + 1, j + 1 + len); // string starts after '#' and has `len` characters

    result.push(str);
    i = j + 1 + len; // move to the next encoded string
  }

  return result;
}
