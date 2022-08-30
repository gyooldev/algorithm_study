def solution(clothes):
    answer = 1
    dict = {}
    for cloth in clothes:
        if(cloth[1] in dict):
            dict[cloth[1]].append(cloth[0])
        else:
            dict[cloth[1]] = [cloth[0]]
            
    
    
    for _ , arr in dict.items():
        answer = answer * (len(arr)+1)
    
    return answer - 1