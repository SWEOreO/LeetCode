# JavaScript Data Structures and Algorithms Cheat Sheet  

## 1. Arrays  

### 1.1 Array Creation  
- Create a new array:  
  ```js
  const A = [];
  ```
- Create a subarray:  
  ```js
  const A = B.slice(l, r); // From index l to r (r is not included)
  ```
- Copy from another array:  
  ```js
  const A = [...B];
  ```
- Create an array from a set:  
  ```js
  const A = [...mySet];
  ```
- Create an array from a string:  
  ```js
  const A = [...myStr];
  ```
- Create an array from hashmap keys:  
  ```js
  const A = Object.keys(myMap);
  ```
- Create an array from hashmap values:  
  ```js
  const A = Object.values(myMap);
  ```
- Create an array from hashmap keys and values:  
  ```js
  const A = Object.entries(myMap);
  ```
- Create an array with length `m`:  
  ```js
  const dp = Array(m);
  ```
- Create an array with length `m`, initialized as `0`:  
  ```js
  const dp = Array(m).fill(0);
  ```
- Create a 2D array with dimension `r x c`, initialized as `-1`:  
  ```js
  const dp = Array.from({ length: r }, () => Array(c).fill(-1));
  ```

### 1.2 Array Modification  
- Add an element:  
  ```js
  A.push(x);
  ```
- Add all elements from another array:  
  ```js
  A.push(...B);
  ```
- Add an element from the left:  
  ```js
  A.unshift(x);
  ```
- Pop an element:  
  ```js
  A.pop();
  ```
- Pop an element from the left:  
  ```js
  A.shift();
  ```
- Remove/add element(s):  
  ```js
  A.splice(idx, deleteCount, x); // in-place
  ```
- Reverse an array:  
  ```js
  A.reverse(); // in-place
  ```
- Sort an array in increasing order:  
  ```js
  A.sort((a, b) => a - b); // in-place
  ```
- Other useful methods:  
  ```js
  A.map(); A.filter(); A.every(); A.some();
  ```

## 2. Strings  
- Create a string literal:  
  ```js
  const s = "abcd";
  ```
- Create a string from another string:  
  ```js
  const s1 = s2.substring(l, r); // From index l to r (r not included)
  ```
- Create a string by joining an array:  
  ```js
  const s = A.join("");
  ```
- Create a string of repeating characters:  
  ```js
  const s = "xyz".repeat(5);
  ```
- Reverse a string:  
  ```js
  const s1 = [...s2].reverse().join("");
  ```
- Loop through a string:  
  ```js
  for (const char of s) { }
  ```
- Split a string:  
  ```js
  const arr = s.split("");
  ```

## 3. Sets  
- Create a new set:  
  ```js
  const seen = new Set();
  ```
- Create a set from an array:  
  ```js
  const seen = new Set(A);
  ```
- Add an element:  
  ```js
  seen.add(x);
  ```
- Delete an element:  
  ```js
  seen.delete(x);
  ```

## 4. Hashtable (Object)  
- Create a new hashtable:  
  ```js
  const g = {};
  ```
- Add a key-value pair:  
  ```js
  g[a] = b;
  ```
- Delete a key:  
  ```js
  delete g[a];
  ```
- Detect if a key exists:  
  ```js
  if (key in g) { }
  if (g[key]) { } // Only works if you know there's no falsy value
  if (g[key] !== undefined) { }
  ```
- Loop through key-value pairs:  
  ```js
  for (const [key, value] of Object.entries(g)) { }
  ```

