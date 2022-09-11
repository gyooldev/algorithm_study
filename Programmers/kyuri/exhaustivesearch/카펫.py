def solution(brown, yellow):
    answer = []
    for i in range(yellow+1):
        num = i + 1
        
        if(yellow % num == 0):
            a = int(yellow/num)
            b = int(num)
            print(a,b)
            if(int((brown -4)/2) == int(a+b)):
                answer.append(a+2)
                answer.append(b+2)
                break
            
    return answer