# 나의 풀이 단순하지만 멍청함

def solution(participant, completion):
    answer = ''
    dict = {}
    for person in participant:
        if(person in dict):
            dict[person]+=1
        else:
            dict[person] = 1

    for complete_p in completion:
        dict[complete_p]-=1

    for k, v in dict.items():
        if(v==1):
            answer = k

    return answer

# 다른 사람 풀이
# 파이썬의 경우 괜찮은 라이브러리를 많이 알아두고 활용하는 것도 좋을 것 같다
import collections


def solution2(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]