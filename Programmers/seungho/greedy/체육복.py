def solution(n, lost, reserve):
    answer = 0

    set_lost = set(lost) - set(reserve)
    set_reserve = set(reserve) - set(lost)

    count = [1 for _ in range(n)]
    for r in set_reserve:
        count[r - 1] += 1
    for l in set_lost:
        count[l - 1] -= 1

    for l in set_lost:
        this = l - 1
        prv = this - 1
        nxt = this + 1

        if prv >= 0 and count[prv] == 2:
            count[prv] -= 1
            count[this] += 1
        elif nxt < n and count[nxt] == 2:
            count[nxt] -= 1
            count[this] += 1

    for c in count:
        if c > 0:
            answer += 1

    return answer
