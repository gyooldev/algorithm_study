def solution(n, lost, reserve):
    lost.sort()
    reserve.sort()
    
    new_ls = list(set(lost) - set(reserve))
    new_rv =list(set(reserve) - set(lost))
    
    answer = n - len(new_ls)
    
    for i in new_ls:
        if(i-1 in new_rv):
            answer += 1
            new_rv.remove(i-1)
        elif(i+1 in new_rv):
            answer += 1
            new_rv.remove(i+1)
    
    
        
    return answer