// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104


// Solution 1
var merge = function(intervals) {

  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
      let interval = intervals[i];
      if (interval[0] <= prev[1]) {
          prev[1] = Math.max(prev[1], interval[1]);
      } else {
          merged.push(prev);
          prev = interval;
      }
  }

  merged.push(prev);
  return merged;    
};

// similar solution 
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const res = [intervals[0]]
  for (let curr of intervals) {
    prev = res[res.length - 1]
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(curr[1], prev[1])
    } else {
      res.push(curr)
    }
  }
  return res
};


// Solution 2 
var merge = function(intervals) {
    
  // predefined constant for start (left endpoint), as well as end (right endpoint)
  const [START, END] = [0, 1];
  
  let result = [];
  
  // make all intervals sorted on (left endpoint, right endpoint) pair in ascending order
  intervals.sort( (a, b) => a[START] != b[START] ? a[START] - b[START] : a[END] - b[END] );
  
  for( const curInterval of intervals){
      
      if( (result.length == 0) || ( result[result.length-1][END] < curInterval[START]) ){
          // no overlapping
          result.push( curInterval );

          
      
      }else{
          // has overlapping
          // merge with previous interval
          result[result.length-1][END] = Math.max( result[result.length-1][END], curInterval[END] );

      }
  }
  
  return result;
};


// Solution 3 - clean solution 
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort(function(a,b) { // sort array by 1st element, and takes into consideration both digits in the number 
      return a[0]-b[0];
  });
  
  for (var i = 1; i < intervals.length; i++) {
      if (intervals[i - 1][1] >= intervals[i][0]) { // overlapping
          if (intervals[i - 1][0] > intervals[i][0]) { // left => intervals[i][0]
              intervals[i - 1][0] = intervals[i][0];
          } 
          if (intervals[i - 1][1] < intervals[i][1]) {
              intervals[i - 1][1] = intervals[i][1];
          }
          
          intervals.splice(i, 1);
          i--; // reset index as the array lenght changes
      }
  }
  
  return intervals
};
