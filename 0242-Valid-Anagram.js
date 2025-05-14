// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


// Solution 1 - use 26 characters' count
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const countS = Array(26).fill(0);
  const countT = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {

    // ascii val of 'a' 
    countS[s.charCodeAt(i) - 97]++;
    countT[s.charCodeAtP(i) - 97]++;
  }

  for (let j = 0; j < 26; j++) {
    if (countS[j] !== countT[j]) return false;
  }

  return true;
}


// Solution 2 - sort 

const isAnagram2 = () => {
  s = s.split("").sort();
  t = t.split("").sort();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) return false;
  }

  return true;
}


// another expression with sort
const isAnagram2a = (s, t) => {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

// Solution 3 - use count 

const isAnagram3 = (s, t) => {
  if (t.length !== s.length) return false;

  const counts = {};

  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }

  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }

  return true;
}

// Solution 4 - hash Table - similar to count method
const isAnagram4 = (s, t) => {
  if (s.length !== t.length) return false;

  let myMap = new Map();

  for (let char of s) {
    myMap.set(char, (myMap.get(char) || 0) + 1)
  }

  for (let char of t) {
    if (!myMap.get(char) || myMap.get(char) === 0) return false;
    myMap.set(char, myMap.get(char) - 1);
  }

  return true;
}