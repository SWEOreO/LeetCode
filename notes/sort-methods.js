// Common sorting methods in JavaScript

// ----------------------------------------------------------------

// 1. Bubble Sort - O(n^2)
// move the largest element to the end of the array
// compare the adjacent elements
// if the first element is greater than the second element, swap them
// repeat the process until the array is sorted

// old way to swap
function bubbleSort(arr) {
  let n = arr.length;
  let noSwap; // flag to check if any swap happened
  for (let i = n; i > 0; i--) {
    noSwap = true; // assume no swap happened
    // loop through the array
      for (let j = 0; j < i - i - 1; j++) { // count of comparisons
        // compare the adjacent elements
          if (arr[j] > arr[j + 1]) {
              // swap arr[j] and arr[j+1], old way to sewap
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              noSwap = false; // swap happened
          }
      }
      if(noSwap) break; // if no swap, then break
  }
  return arr;
}


// new way to swap - instead of 3 line, just 1 line
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function bubbleSort(arr) {
  let noSwap; // flag to check if any swap happened
  let n = arr.length;
  for (let i = n; i > 0; i--) {
      noSwap = true; // assume no swap happened
      for (let j = 0; j < i - i - 1; j++) { // count of comparisons
          if (arr[j] > arr[j + 1]) {
              swap(arr, j, j + 1);
              noSwap = false; // swap happened
          }
      }
      if(noSwap) break; // if no swap, then break
  }
  return arr;
}


// ----------------------------------------------------------------

// 2. Selection Sort - O(n^2)
// find the smallest element in the array
// swap it with the first element
// repeat the process for the rest of the array

// code
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in the unsorted array
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// ----------------------------------------------------------------

// 3. Insertion Sort - O(n^2)
// build a sorted portion of the array
// take the next element from the unsorted portion
// find the correct position in the sorted portion
// insert the element in the correct position
// compare the element with the sorted portion
// if the element is smaller than the last element of the sorted portion
// move the last element of the sorted portion to the right
// repeat the process until the element is in the correct position

// code
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
          arr[j + 1] = arr[j];
      }
      arr[j + 1] = current;
  }
  return arr;
}

// ----------------------------------------------------------------
// 4. Merge Sort - O(n log n)
// divide the array into two halves
// sort each half recursively
// merge the two halves

// code - naive code
// how merge sort works
const mergeSort = (arr1, arr2) => {
  let mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }

  return mergedArr;
}

// shorter recursive method - single array
const mergeSort2 = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// ----------------------------------------------------------------

// 5. Quick Sort - O(n log n) - recommend for large data sets and better than merge sort

// choose a pivot element
// partition the array into two halves
// elements less than the pivot on the left
// elements greater than the pivot on the right
// sort each half recursively
// choose the last element as pivot
// partition the array into two halves
// elements less than the pivot on the left
// elements greater than the pivot on the right
// sort each half recursively

// code  - with recursion
const quicksort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}


// code - without recursion
const quicksortIterative = (arr) => {
  const stack = [arr];
  const result = [];

  while (stack.length) {
    const current = stack.pop();
    if (current.length <= 1) {
      result.push(...current);
      continue;
    }

    const pivot = current[current.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < current.length - 1; i++) {
      if (current[i] < pivot) {
        left.push(current[i]);
      } else {
        right.push(current[i]);
      }
    }

    stack.push(right);
    stack.push([pivot]);
    stack.push(left);
  }

  return result;
}

// ----------------------------------------------------------------

// 6. Heap Sort - O(n log n)
// Heap sort is a comparison-based sorting algorithm
// that uses a binary heap data structure.
// It first builds a max heap from the input array
// and then repeatedly extracts the maximum element
// from the heap and rebuilds the heap until the array is sorted.
// The heap is a complete binary tree where each parent node
// is greater than or equal to its child nodes.

// code:
function heapSort(arr) {
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract elements from the heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// To heapify a subtree rooted at index i
function heapify(arr, n, i) {
  let largest = i;         // Initialize largest as root
  let left = 2 * i + 1;    // left = 2*i + 1
  let right = 2 * i + 2;   // right = 2*i + 2

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Example:
console.log(heapSort([4, 10, 3, 5, 1])); // [1, 3, 4, 5, 10]

// ----------------------------------------------------------------

// 7. Counting Sort - O(n + k)
// Counting sort is a non-comparative sorting algorithm
// that sorts integers by counting the number of occurrences
// of each unique value in the array.

// code
function countingSort(arr) {
  if (arr.length === 0) return [];

  // Find the min and max values
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Create count array and fill with 0s
  const count = new Array(max - min + 1).fill(0);

  // Count the frequency of each element
  for (let num of arr) {
    count[num - min]++;
  }

  // Build the sorted result
  const result = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i + min);
      count[i]--;
    }
  }

  return result;
}

// Example:
console.log(countingSort([4, 2, 2, 8, 3, 3, 1])); // [1, 2, 2, 3, 3, 4, 8]


// ----------------------------------------------------------------

// 8. Radix Sort - O(nk)
// Radix sort is a non-comparative integer sorting algorithm
// that sorts numbers by processing individual digits.
// It works by distributing the numbers into buckets based on their digits
// and then collecting them back in order.

// RADIX SORT (FOR NON-NEGATIVE INTEGERS ONLY)
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

// ddiferent methods to count digits
// Method1 ----------- count how many digits in a number ---------
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// Method 2 ----------- count how many digits in a number ---------
function digitCount(num) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
// Method 3 ----------- count how many digits in a number ---------
function digitCount(num) {
    return num.toString().length;
}
// Method 4 ----------- count how many digits in a number ---------
function mostDigits(nums) {
    let maxDigits = 0;
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
    }
    return maxDigits;
}