def solution(phone_book):
    list = sorted(phone_book)    
    answer = True
    for x, y in zip(list[::],list[1::]):
        if(y.startswith(x)):
            return False
            
    
    return answer