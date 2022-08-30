def solution(genres, plays):
    answer = []
    total_plays = {}
    total_list = {}
    
    for i,v in enumerate(zip(genres, plays)):
        if(v[0] in total_plays):
            total_plays[v[0]] += v[1]
            total_list[v[0]][i] = v[1]
        else:
            total_plays[v[0]] = v[1]
            total_list[v[0]] = {i: v[1]}
    
    sorted_total_plays = sorted(total_plays.items(), key=lambda item:item[1],reverse=True)
    
    for i in sorted_total_plays:
        sliced = sorted(total_list[i[0]].items(), key=lambda item:item[1],reverse=True)[0:2]
        for j in sliced:
            answer.append(j[0])
        
    return answer


## 다른 사람의 better solution

def solution(genres, plays):
    answer = []
    d = {e:[] for e in set(genres)}
    for e in zip(genres, plays, range(len(plays))):
        d[e[0]].append([e[1] , e[2]])
    genreSort =sorted(list(d.keys()), key= lambda x: sum( map(lambda y: y[0],d[x])), reverse = True)
    for g in genreSort:
        temp = [e[1] for e in sorted(d[g],key= lambda x: (x[0], -x[1]), reverse = True)]
        answer += temp[:min(len(temp),2)]
    return answer