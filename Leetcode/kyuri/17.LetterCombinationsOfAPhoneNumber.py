import itertools

class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        letter_map = {'2':['a','b','c'], '3':['d','e','f'], '4':['g','h','i'], '5':['j','k','l'],'6':['m','n','o'],'7':                        ['p','q','r','s'],'8':['t','u','v'],'9':['w','x','y','z']}
        
        def list_return(digits):
            arr = []
            for d in digits:
                arr.append(letter_map[d])
            return arr
        
        if(digits == ""):
            answer = []
        else:
            answer = ["".join(i) for i in itertools.product(*list_return(digits))]
        
        return answer