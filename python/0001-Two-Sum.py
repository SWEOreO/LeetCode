from typing import List

# Solution 1 - brute force
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] == target - nums[i]:
                    return [i, j]
        return []

# Solution 2 - hashmap - 2 pass
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:  
        hashmap = {}
        for i in range(len(nums)):
            hashmap[nums[i]] = i
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in hashmap and hashmap[complement] != i:
                return [i, hashmap[complement]]
        return []

# # Solution 3 - one pass - hashmap
# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         numMap = {}
#         for i in range(len(nums)):
#             complement = target - nums[i]
#             if complement in numMap:
#                return [numMap[complement], i]
#             numMap[nums[i]] = i
#         return []
