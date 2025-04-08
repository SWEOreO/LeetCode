// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""


// Solution - recursive - use GCD
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
      return "";
  }
  const maxLength = myFunction(str1.length, str2.length);
  return str1.substring(0, maxLength);
};

function myFunction(a, b) {
  if (b === 0) {
      return a;
  }
  return myFunction(b, a % b);
}

// Solution 2: similar as S1 , both use GCD - use slice
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
      return "";
  }

  const gcd = (len1, len2) => { //greatest common divisor  
      while (len2 !== 0) { 
          [len1, len2] = [len2, len1 % len2]; // swap
      }
      return len1;
  };

  return str1.slice(0, gcd(str1.length, str2.length));  
};


// Solution 3 - Brute Force
var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
      return "";
  }

  const minLength = Math.min(str1.length, str2.length);
  for (let i = minLength; i > 0; i--) {
      if (str1.slice(0, i) === str2.slice(0, i) && str1.length % i === 0 && str2.length % i === 0) {
          return str1.slice(0, i);
      }
  }
  return "";
};