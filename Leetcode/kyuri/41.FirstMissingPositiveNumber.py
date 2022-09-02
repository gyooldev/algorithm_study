class Solution(object):
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        output = 1
        sorted_list = sorted(nums)
        for num in sorted_list:
            if(num == output):
                output += 1
        
        return output
                