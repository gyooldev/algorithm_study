class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        str_map = {}
        for str in strs:
            sorted_str = sorted(str)
            str_key = "".join(sorted_str)
            if str_key in str_map:
                str_map[str_key].append(str)
            else:
                str_map[str_key] = [str]
        
        result = list(str_map.values())
        
        return result
