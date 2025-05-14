// linear Search
// O(n) time complexity
// O(1) space complexity
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// ---------------------------------------------------------------------------------

// Binary Search - Iterative
// O(log n) time complexity
// O(1) space complexity
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Binary Search Recursive
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}


// ---------------------------------------------------------------------------------

// Naive Search - String
// find how many times a string appears in another string
// O(n * m) time complexity
// O(1) space complexity
function naiveSearch(long, short) {
  let count = 0;
  if (short.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}


// ---------------------------------------------------------------------------------

// Exponential Search
// O(log n) time complexity
// O(1) space complexity
function exponentialSearch(arr, target) {
  if (arr[0] === target) {
    return 0;
  }
  let i = 1;
  while (i < arr.length && arr[i] <= target) {
    i *= 2;
  }
  return binarySearch(arr.slice(i / 2, Math.min(i, arr.length)), target);
}


// ---------------------------------------------------------------------------------


// Ternary Search
// O(log3 n) time complexity
// O(1) space complexity
function ternarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  const mid1 = Math.floor(left + (right - left) / 3);
  const mid2 = Math.floor(right - (right - left) / 3);
  
  if (arr[mid1] === target) {
    return mid1;
  }
  if (arr[mid2] === target) {
    return mid2;
  }
  
  if (target < arr[mid1]) {
    return ternarySearch(arr, target, left, mid1 - 1);
  } else if (target > arr[mid2]) {
    return ternarySearch(arr, target, mid2 + 1, right);
  } else {
    return ternarySearch(arr, target, mid1 + 1, mid2 - 1);
  }
}


// ---------------------------------------------------------------------------------


// Jump Search
// O(sqrt(n)) time complexity
// O(1) space complexity
function jumpSearch(arr, target) {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) {
      return -1;
    }
  }

  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) {
      return -1;
    }
  }

  if (arr[prev] === target) {
    return prev;
  }
  return -1;
}


// ---------------------------------------------------------------------------------


// Interpolation Search
// O(log log n) time complexity
// O(1) space complexity
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    if (low === high) {
      if (arr[low] === target) {
        return low;
      }
      return -1;
    }

    const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === target) {
      return pos;
    }
    if (arr[pos] < target) {
      low = pos + 1;
    } else {
      high = pos - 1;
    }
  }
  return -1;
}


// ---------------------------------------------------------------------------------


// Fibonacci Search
// O(log n) time complexity
// O(1) space complexity
function fibonacciSearch(arr, target) {
  const n = arr.length;
  let fibM2 = 0; // (m-2)'th Fibonacci number
  let fibM1 = 1; // (m-1)'th Fibonacci number
  let fibM = fibM2 + fibM1; // m'th Fibonacci number

  while (fibM < n) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fibM2, n - 1);

    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 -= fibM2;
      fibM2 = fibM - fibM1;
    } else {
      return i;
    }
  }

  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}


// ---------------------------------------------------------------------------------

// Sentinel Search
// O(n) time complexity
// O(1) space complexity
function sentinelSearch(arr, target) {
  const n = arr.length;
  const last = arr[n - 1];
  arr[n - 1] = target;

  let i = 0;
  while (arr[i] !== target) {
    i++;
  }

  arr[n - 1] = last;

  if (i < n - 1 || arr[n - 1] === target) {
    return i;
  }
  
  return -1;
}

// ---------------------------------------------------------------------------------

// Sublist Search
// O(n * m) time complexity
// O(1) space complexity  
function sublistSearch(arr, sublist) {
  const n = arr.length;
  const m = sublist.length;

  for (let i = 0; i <= n - m; i++) {
    let j;
    for (j = 0; j < m; j++) {
      if (arr[i + j] !== sublist[j]) {
        break;
      }
    }
    if (j === m) {
      return i;
    }
  }
  return -1;
}