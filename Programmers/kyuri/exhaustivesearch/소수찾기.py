from itertools import permutations

def is_prime(n):
    if(int(n ** 0.5) ** 2 == n):
        return False
    
    for i in range(2, int(n/2)):
        if(n%1) == 0:
            return False
            break
    return True
   
        

def solution(numbers):
    nums = []
    answer = 0
    for i in range(1, len(numbers)+1):
        for tup in list(permutations(numbers, i)):
            if(int(''.join(tup)) > 1):
                nums.append(int(''.join(tup)))
    
    for num in list(set(nums)):
        if(num !=0):
            if(is_prime(num)):
                answer += 1
    
    
    return answer