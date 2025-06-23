from typing import List
def containsDuplicate(self, nums: List[int], k: int) -> bool:
  dic = {}
  for i, j in enumerate(nums):
    if j in dic and i - dic[j] <= k:
      return True
    dic[j] = i
  return False


#  HashSet
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        hset = {}

        for idx in range(len(nums)):
            if nums[idx] in hset and abs(idx - hset[nums[idx]]) <= k:
                return True
            hset[nums[idx]] = idx
        return False