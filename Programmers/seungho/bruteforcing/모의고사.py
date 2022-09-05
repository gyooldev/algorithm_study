def solution(answers):
    answer = []

    way = [[1, 2, 3, 4, 5],
           [2, 1, 2, 3, 2, 4, 2, 5],
           [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    score = [(1, 0), (2, 0), (3, 0)]
    for i in range(len(answers)):
        for j in range(3):
            if answers[i] == way[j][i % len(way[j])]:
                score[j] = (j + 1, score[j][1] + 1)

    score.sort(reverse=True, key=lambda x: x[1])
    pick_max = score[0][1]
    for s in score:
        if s[1] == pick_max:
            answer.append(s[0])
        else:
            break

    return answer
