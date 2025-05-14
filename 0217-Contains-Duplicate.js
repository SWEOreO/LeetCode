// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Solution 1 Use Loop
var containsDuplicate = function(nums) {
  nums.sort((a,b) => a-b);
  for(let i = 0; i <= nums.length-1; i++){
      if(nums[i] === nums[i+1]){
          return true
      }
  }
  return false
};


// Solution 2  Create a Set 
const containsDuplicate = function(nums) {
  const s = new Set(nums); 
  return s.size !== nums.length
};

// Python

// class Solution:
//   def containsDuplicate(self, nums: List[int]) -> bool:
//     h = set()
//     for num in nums:
//       if num in h:
//         return True
//       else:
//         h.add(num)
//     return False