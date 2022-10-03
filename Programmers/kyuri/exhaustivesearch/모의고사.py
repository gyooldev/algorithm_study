def solution(answers):
    first = [1,2,3,4,5] * 2000
    second = [2,1,2,3,2,4,2,5] * 1250
    third = [3,3,1,1,2,2,4,4,5,5] * 1000
    
    def compare(student):
        counter = 0
        for x, y in zip(student, answers):
            if(x == y):
                counter += 1
        return counter
    
    counters = [compare(first),compare(second),compare(third)]
    answer = []
    
    max_val = max(counters)
    for i, v in enumerate(counters):
        if(v == max_val):
            answer.append(i+1)
    
    return sorted(answer)