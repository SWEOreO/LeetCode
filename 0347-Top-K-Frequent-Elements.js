// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// Solution 1 - use heap - min heap - manual solution
var topKFrequent = function(nums, k) {
  const countMap = new Map();
  for (const num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  const heap = new MinHeap();

  for (const [num, freq] of countMap) {
      if (heap.size() < k) {
          heap.add([freq, num]);
      } else {
          heap.add([freq, num]);
          heap.poll(); // need to install this function
      }
  }

  return heap.toArray().map(pair => pair[1]);
};

// Helper class for MinHeap
class MinHeap {
  constructor() {
      this.heap = [];
  }

  size() {
      return this.heap.length;
  }

  add(pair) {
      this.heap.push(pair);
      this.bubbleUp();
  }

  poll() {
      const min = this.heap[0];
      const end = this.heap.pop();
      if (this.size() > 0) {
          this.heap[0] = end;
          this.bubbleDown();
      }
      return min;
  }

  bubbleUp() {
      let idx = this.size() - 1;
      const element = this.heap[idx];
      while (idx > 0) {
          let parentIdx = Math.floor((idx - 1) / 2);
          let parent = this.heap[parentIdx];
          if (element[0] >= parent[0]) break;
          this.heap[idx] = parent;
          idx = parentIdx;
      }
      this.heap[idx] = element;
  }

  bubbleDown() {
      let idx = 0;
      const length = this.size();
      const element = this.heap[0];
      while (true) {
          let leftChildIdx = 2 * idx + 1;
          let rightChildIdx = 2 * idx + 2;
          let swap = null;

          if (leftChildIdx < length) {
              let leftChild = this.heap[leftChildIdx];
              if (leftChild[0] < element[0]) {
                  swap = leftChildIdx;
              }
          }

          if (rightChildIdx < length) {
              let rightChild = this.heap[rightChildIdx];
              if ((swap === null && rightChild[0] < element[0]) ||
                  (swap !== null && rightChild[0] < this.heap[swap][0])) {
                  swap = rightChildIdx;
              }
          }

          if (swap === null) break;
          this.heap[idx] = this.heap[swap];
          idx = swap;
      }
      this.heap[idx] = element;
  }

  toArray() {
      return this.heap;
  }
}










var topKFrequent = function(nums, k) {
  const count = new Map();
  for (const num of nums) {
      count.set(num, (count.get(num) || 0) + 1);
  }

  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of count.entries()) {
      buckets[freq].push(num);
  }

  const result = [];
  for (let i = buckets.length - 1; i >= 0; i--) {
      if (buckets[i].length > 0) {
          result.push(...buckets[i]);
          if (result.length >= k) {
              return result.slice(0, k);
          }
      }
  }
};


// Solution 2 - map and heap
var topKFrequent = function(nums, k) {
  const freq = new Map();
  for (let num of nums) {
      freq.set(num, (freq.get(num) || 0) + 1);
  }

  const maxHeap = [...freq.entries()].sort((a, b) => b[1] - a[1]);
  
  const result = [];
  for (let i = 0; i < k; i++) {
      result.push(maxHeap[i][0]);
  }

  return result;
};

// solution 3 - map , sort a map based on its values
var topKFrequent = function(nums, k) {
  let hm = new Map();
  nums.forEach(num => {
      hm.set(num, (hm.get(num) || 0) + 1);
  });

  let temp = [];
  for (let [num, count] of hm) {
      temp.push([count, num]);
  }

  temp.sort((a, b) => b[0] - a[0]);

  return temp.slice(0, k).map(item => item[1]);
};

// another expression
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let result = []
  let numbers = {}
  for(let i = 0; i < nums.length; i++) {
      if(numbers[nums[i]]) {
          numbers[nums[i]]++
      } else {
          numbers[nums[i]] = 1
      }
  }
  let array = Object.entries(numbers).sort((a,b) => {
      return a[1] - b[1]
  })
  while(result.length != k) {
      let curr = array.pop()
      result.push(curr[0])
  }
  return result
};


// Solution 4 - map no sorting
var topKFrequent = function(nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];
  
  for(let num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  for(let [num, freq] of freqMap) {
    // create new Set for this key if it doesn't already exist
      bucket[freq] = (bucket[freq] || new Set()).add(num);
  }
  
  for(let i = bucket.length-1; i >= 0; i--) {
      if(bucket[i]) result.push(...bucket[i]);
      if(result.length === k) break;
  }
  return result;
};